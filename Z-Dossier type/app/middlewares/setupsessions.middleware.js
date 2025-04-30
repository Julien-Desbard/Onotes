import session from "express-session";

export const setupSession = session({
    // c'est un mot de passe qui permet de signer le cookie (un cookie de session est crée pour le client, il se base sur ce mot de passe pour générer le cookie)
    secret: process.env.secret
    ,
    // si on met à true, permet de sauvegarder la session même si celle ci n'est pas modifié, pour préserver les performances du serveur, en général on le laissera à false
    resave: false,
    // chaque personne entrante sur notre serveur aura une session peu importe s'il va les utiliser ou non, je mets cette option à false pour économiser les ressources du serveur
    saveUninitialized: false,

    cookie: {
        secure: false, // ! TOUJOURS METTRE TRUE EN PROD (pour le https)
        httpOnly: true, // bloque l'usage du cookie coté front, (protection contre le vol de cookie par xss ...)
        maxAge: 60 * 60 * 1000, // ici, permet de définir l'age du cookie coté client, au bout d'1h il expire
    },
})
