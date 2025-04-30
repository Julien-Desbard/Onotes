# Introduction

Permet d'épurer le code du routeur pour ne lui laisser que les routes

exemple :
Dans route :

```js
router.get("/", displayHome)
```

Dans controleur :

```js
export const displayHome = (req, res) => {
    res.render("home");
}
```

Suggestion pour éviter de s'embêter avec le nom  de la focntion dans le controleur :

```js
import * as homeController from "../controllers/homeController.js";  //j'importe mon contrôlleur dans mon routeur comme un objet
router.get("/", homeController.displayHome) // je mets en place mon contrôleur en appelant la méthode qu'il stock (displayHome) 
```
