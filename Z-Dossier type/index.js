import 'dotenv/config.js' //importe le fichier .env et stock dans process.env son contenu
import path from "node:path"; // pour gérer les chemins
import express from "express"; // pour gérer le server
import session from "express-session"; // pour gérer la session
import { router } from "./app/routers/router.js";
import { setupSession } from './app/middlewares/setupsessions.middleware.js';
import { addUserToLocals } from './app/middlewares/addUserToLocals.middleware.js';

const app = express();

app.set("view engine", "ejs");
// maintenant qu'on a un dossier app, il faut préciser que notre dossier views est dedans et plus à la racine
// path.join + import.meta.dirname = methode la plus clean pour faire un chemin absolu dans notre projet
app.set("views", path.join(import.meta.dirname, "app", "views"));

app.use(express.static(path.join(import.meta.dirname, "public")));

// j'active le middleware pour pouvoir utiliser les formulaires en post
app.use(express.urlencoded({ extended: true }));

//body parser indiquant qu'on reçoit du Json dans le body de la requête
app.use(express.json())

//appelle le middleware pour mettre en place la session plutôt que de le faire dans le fichier index, plus lisible
//app.use(setupSession);

//ajoute le user à la varaible locals pour controler que le user a bien une session en cours de validité
//app.use(addUserToLocals);

app.use(router);

// ajoute le middleware de gestion des erreurs
//app.use(handleErrors) // le prochain middleware d'erreur dans la file herite de la gestion de l'erreur


app.listen(process.env.PORT, () => {
    console.log(`projet démarré : http://localhost:${process.env.PORT}`);
  });