# Validation du mdp par l'objet

- Il est possible d'utiliser le model pour valider que l'utilisateur respecte bien nos exigences lors de ses saisies.
- Pour celà, il faut déjà définir ces exigences dans le modèle, dans la partie validate

## Définition des exigences pour chaque propriété de l'objet

```js
export class AppUser extends Model {}

AppUser.init(
    {
        email: {
            type: DataTypes.TEXT,
            // ici c'est contrainte -> donc technique et structure au niveau de postgresql
            allowNull: false,
            unique: true,
            // ici c'est des validations -> donc validation niveau js avant d'arriver à postgres
            validate: {
                // les validations sont listés dans la doc de sequelize
                isEmail: { // vérifie que la saisie est bien un email
                     msg: "Votre email n'est pas valide", // message en cas d'erreur
                     args: true 
                }
            },
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty : {
                    msg: "Ce champ ne doit pas être vide",
                    args : true
                }
            }
        },
        firstname: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Ce champ ne doit pas être vide",
                    args : true
                }
            },
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                is:{
                    args:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{8,}$/,
                    msg: "Le mot de passe doit avoir 8 caractères, 1 maj, 1 min, 1 carac spécial"
                } 
            }
        },
        role: {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: 'member',
        },
    },
    {
        sequelize,
        tableName: "app_user",
    }
);
```

### Mise en place du contrôle de la saisie via l'objet

- une fois les exigences définies dans le modèle, on utilise le modele pour controler la saisie de l'utilisateur  
emplacements :
  - controller --> S11/S10-oquiz-BenjaminDev34/app/controllers/auth.controller.js
  - modele --> S11/S10-oquiz-BenjaminDev34/app/models/AppUser.model.js

```js
export const handleSubscribe = async (req, res) => {
    // je crée une instance js du user à l'aide du model (rien en bdd pour le moment)
    const newUser = new AppUser(req.body);// req.body contient les champs nécessaires à la création d'une instance de AppUser (email, name, firstname & password) 
    // j'initialise un objet vide 
    const errors = {};
    // je veux vérifier si mes données sont ok par rapport à ma validation côté model avec sequelize
    try {
        // validate -> throw une erreur si au moins une validation du model foire
        await newUser.validate();
    } catch (error) {
        // ici error fait reference à l'erreur lancé par sequelize si y'en a une, elle contient un tableau d'objets, chaque erreur est un objet dans le tableau
        //  transformer le error compliqué en un error plus simple et exploitable
        error.errors.forEach(fieldErrorObject => {
            // j'ajoute une propriété correspondant au path dans mon objet avec comme valeur le message
            errors[fieldErrorObject.path] = fieldErrorObject.message;
        });
        // l'objectif est d'arrivé à un objet qui ressemble à ca : 
        // { name: Ce champs ne doit pas être vide, password : le mot de passe doit comprendre bla bla bla}
        // TODO trouver un moyen de rendre les messages en francais et jolie
        
        return res.status(422).render("auth/subscribe", { errors, newUser });
    }
    // gérer le mot de passe
    // je set le mot de passe du user par la signature de son mot de passe passé au travers de l'algo argon2 (un hash)
    //  avant d'insérer je veux savoir si l'user existe pas déjà
    // ? solution 1 : faire un find via l'email en bdd si un existe déjà je ne tente pas la création mais renvoi un message d'erreur
    newUser.password = await argon2.hash(newUser.password);
    //  insérer en bdd
    // ? solution 2 : un try catch en vérifiant si le code de retour erreur est 23505, c'est le code de clé unique pour sequelize
    try {
        await newUser.save();
    } catch (error) {
        // identifier pour être sur que l'erreur est bien lié à l'unicité de l'email
        if (error.parent.code === "23505") {
            errors.email = "Email déjà pris";
            return res.status(422).render("auth/subscribe", { errors, newUser });
        }
        // si l'erreur n'est pas une contrainte de clé unique, je passe l'erreur au middleware d'erreur
        next(error);
    }
    //  gérer la connexion direct à l'inscription
    // je mets dans la session l'id du user
    req.session.userId = newUser.id;

    res.redirect("/");
};
```
