# rendre les infos de la session dispo partout via les locals

- dans le middleware :

```js
const loadSessionToLocalsMiddleware = (request, response, next) => {
    // je prends les figurines en session et je les mets dans mes locals
    // reponse et app ont une propriété locals, cette propriété est utilisable dans les fichiers ejs, 
    // on leur fait passer du coup les valeurs qui peuvent être utiles sur plusieurs pages
    response.locals.session = request.session;
    // ici j'appelle le prochain middleware, qui peut être une route
    next();
}

export default loadSessionToLocalsMiddleware;
```

- dans l'index :

```js
import loadSessionToLocalsMiddleware from './app/middlewares/loadSessionToLocalsMiddleware.js';
...
app.use(loadSessionToLocalsMiddleware);
```

## Limiter l'usage d'un middleware à certaines pages

Si je ne veux utiliser le middleware ci-dessus que sur certaines routes, je l'ajoute dans les routes qui en ont besoin : 

```js
router.get('/',loadCategoriesMiddleware ,mainController.homePage);
```

pas de limites au nombre de Middleware qu'on peut  ajouter

Je peux mettre un miuddleware à trois niveaux :

- application (dans l'index, avec `app.use`)
- router (via `route.use`mais on ne l'utilise pas en formation)
- route ( cf. l'exemple juste au-dessus)
