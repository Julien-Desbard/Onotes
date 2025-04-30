# le principe

En cas d'erreur dans un middleware, on peut réorienter le fluw directement vers un middleware spécialisé dans le traitement des erreurs

## Fonctionnement

1- Créer le middleware dans le dossier dédié

2- Créer la fonction comme d'habitude en ajoutant un paramètre supplémentaire : err

```js
export const exempleMiddlewareError = (err, req, res, next) => {
    res.status(500).send("Oops il y a eu un probleme");}
```

3- Importer le middelware d'erreur dans le server et le mettre en usage

```js
import { exempleMiddlewareError } from "./middlewares/exempleMiddlewareError.js";
app.use(exempleMiddlewareError);
```

4- Pour passer du middleware qui est en erreur au middleware qui va la traiter, le premier doit "lancer" une erreur

```js
        throw new Error("Le jeu n'existe pas");
```
