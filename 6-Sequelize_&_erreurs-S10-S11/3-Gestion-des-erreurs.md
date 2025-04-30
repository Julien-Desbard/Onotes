# Middleware gestion des erreurs

- De base, si une erreur arrive, le middleware n'a pas besoin d'être appelé car il est reconnu par express puisqu'il contient quatre arguments
- Il n'est plus nécessaire de faire des try/catch lors des appels à la BDD, Express 5 reconnaitra seul l'occurence d'une erreur

```js
// il me manque le status code http dans mes erreurs classique, je crée donc une nouvelle classe qui étends de la classe de base avec les statusCode en +
// dans le dossier error, je crée une nouvelle calsse AppError
export class AppError extends Error{
    statusCode;
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}
//je l'indique dans mon contoller
export const home = async (req, res) => {
    const difficulty = await Difficulty.findByPk(55);
    if(!difficulty){
        throw new AppError("La difficulté n'existe pas", 404);// j'envoie l'erreur et le code errur à mon middleware d'erreur
    }
    res.render("main/home")};

// je créer le middleware qui va gérer les erreurs
export const handleErrors = (err, req, res, next) => {
    //  if environnement de dev -> console.error(err);
    if(process.env.NODE_ENV === "developpement"){
        console.error(err); // affiche en console le contenu des erreurs : 
    }
    switch (err.statusCode) {
        case 404:
            res.status(404).render("errors/404");
            break;
        default:
            res.status(500).render("errors/500")
            break;
    }
}

//je pense à mettre à jour le fichier.env : 

```js
NODE_ENV=production // on indique a express qu'on est en prod et il gèrte différement le site (mise en cache des views, du CSS...)
NODE_ENV=developpement //on indique qu'on est en developpement
```

## Erreurs principales à couvrir

- 400
- 401
- 403
- 404
- 422
- 500

### Bypasser le middleware d'erreur

- si je veux gérer une erreur en direct et ne pas laisser le middleware s'en charger, je mets un try/catch sur la requête server concernée sequelize fournira un objet détaillant chaque erreur et la condition qui n'est pas respectée

```js
export const signup = async (req, res) => {
    const userTest = new AppUser(req.body)
    try {
        await userTest.validate()
    } catch (error) {
        console.log(error)
    }
    res.redirect("/")
}
```
