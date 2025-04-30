import { AppUser } from "../models/index.js";
import argon2 from "argon2";

export const displaySubscribe = async (req, res) => {
    // j'envoi le newUser pour éviter d'avoir l'erreur sur la vue newUser is not defined vu qu'on préremplis les champs en cas d'echec
    res.render("auth/subscribe", {newUser : new AppUser()});
};

export const handleSubscribe = async (req, res) => {
    // je crée une instance js du user à l'aide du model (rien en bdd pour le moment)
    const newUser = new AppUser(req.body);
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

export const displayLogin = (req, res) => {
    res.render("auth/login");
};

export const handleLogin = async (req, res) => {
    // TODO -optionnel vérifier que le mail et le mot de passe sont bien remplis

    //  à l'aide de l'email passé dans le formulaire je vais voir si un user existe
    const user = await AppUser.findOne({ where: { email: req.body.email } });
    //  si pas de user ou que le mot de passe fournis ne correspond pas au user donnée -> message d'erreur
    // ? argon2 verify, va prendre le hash, la string du formulaire, si la signature est ok renvoi true, sinon false
    if (!user || !(await argon2.verify(user.password, req.body.password))) {
        return res.status(400).render("auth/login", { error: "Les identifiants sont invalides" });
    }
    req.session.userId = user.id;
    res.redirect("/");
};

export const handleLogout = async (req, res) => {
    // je détruis la session
    req.session.destroy();
    // je previens le client que son cookie ne sers plus
    res.clearCookie("connect.sid");
    // je redirige vers la home
    res.redirect("/");
}