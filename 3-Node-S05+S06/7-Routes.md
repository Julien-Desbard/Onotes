# Mettre en place le router et les routes

1- Créer un dossier routers

2- créer un fichier router.js

3- importer express

```js
import express from "express";
```

4- déclarer la const router

```js
const router = express.Router();
```

5- ranger les routes dans ce fichier

```js
router.get("/", (req, res) => {
    res.render("index");
});
```

6- ensuite importer le router dans le server

```js
import { router } from "./routes/router.js";
import movieDatabase from "../movies.json" with {type:'json'} // dans ce cas, on importe un fichier json comme un module, d'ou l'ajout de  :"with {type:'json'}"
```

7- le router étant un middleware, il faut déclarer dans le server qu'on va s'en servir

```js
app.use(router);
```

8- Importer les objets et autres imports nécessaires pour gérer les routes ainsi logées dans router.js

```js
import { games } from "../games.js";
import 
```

## Exemple de router

```js
import { games } from "../games.js";
import express from "express";
export const router = express.Router();

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/game/:name", (req, res) => {
    const game = games.find((element) => req.params.name === element.name);
    if (!game) {
        throw new Error("Le jeu n'existe pas");
    }
    res.status(200).render(game.name, { game });
});
```

### Route de formulaire

```js
router.post("/suggestion", (req, res) => { // comme le formulaire est en method POST, cette route detecte la soumission du formulaire 
    console.log(req.body);
    res.send("form envoyé"); //elle prend la main et renvoie l'utilisateur sur "form envoyé"
})
```

POur utiliser la donnée saisie dans le formualire, on doit utiliser un middleware pour l'interprêter.

```js
app.use(express.urlencoded({extended: true})) // rend la donnée disponible partout dans le code, via req.body
```

Je peux aussi rediriger vers la page d'accueil

```js
res.redirect("/") // renvoie sur la page d'accueil
```
