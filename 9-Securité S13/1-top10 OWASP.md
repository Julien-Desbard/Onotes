# CORS

- J'installe cors via npm, plutôt quand je mets le site en production

- Je crée un constante dans laquelle je déclare :
  - les adresses autorisées, dans un tableau si je veux en déclarer plusieurs
  - les méthodes autorisées

```js
const corsOptions = {
    origin : `${process.env.BASE_URL}:5173`, // si je n'avais pas stocké l'info dans process.env, j'aurais indiqé : http://localhost:5173
    methods : ["GET"]
};
```

- Je peux déclarer plusieurs adresse dans un tableau :

```js
const corsOptions = {
    origin : [`${process.env.BASE_URL}:5173`,${process.env.BASE_URL}:3000], 
    methods : ["GET"]
};
```

- Je crée ensuite un middleware qui va utiliser les adresses autorisées pour limiter les accès aux adresse indiquées

```js
app.use(cors(corsOptions));
```

Je peux créer plusieurs middleware en fonction du rôle de mon utilisateur puis utiliser une condition se fondant sur le rôle donner des accès différents

```js
const corsAdmin = {
    origin : `${process.env.BASE_URL}:5173`, // si je n'avais pas stocké l'info dans process.env, j'aurais indiqé : http://localhost:5173
  methods: ["GET", "POST", "PATCH", "DELETE"],
};

if (user.role === "admin") {
    app.use(cors(corsAdmin));
} else {
    app.use(cors(corsOptions));
}
```

## Injections

- J'installe xss sanitizer via npm i express-xss-sanitizer
- je crée le middleware à traver lequel chaque requête devra passer pour qu'il nettoie les informations passées par l'utilisateur
  - ex : il va supprimer les balises script avant de passer les infos au middleware suivant (comme zod par exemple)

```js
app.use(xss());
```

### Stack Leaking

- une erreur qui donne des infos sur les outils utilisés par notre site

```js
// Si vous avez une erreur de ce type...
{
  "name": "SequelizeValidationError", // On sait que vous utilisez Sequelize
  "message": "title cannot be null", // Une contrainte sur un champ
  "stack": "...path/to/node_modules/sequelize..." // La structure de votre app
}
// Autant de failles qui peuvent être exploitées contre votre app
```

Pour corriger ça, on modifie ce qui est retourné par le middleware d'erreur en fonction de l'état du site : en dev ou en production :

```js
  res.status(500).json({
    error: "Something went wrong",
    // Si nous sommes côté développement, on peut voir à quoi correspond l'erreur 500
    // SI le site est en production, on ne renvoie rien pour éviter que des personnes malveillantes
    // puissent avoir des infos sur notre application
    details: process.env.NODE_ENV === "production" ? undefined : err.message,
  });
```

#### HTTPS

```js
// Je crée un objet qui contient les liens vers la clé et le certificat permettant d'utiliser le protocole HTTPS
const httpsOptions = {
  key: fs.readFileSync("./src/certs/okanban.key"),
  cert: fs.readFileSync("./src/certs/okanban.crt"),
};
```

Je passe ensuite deux infos à mon serveur :

```js
// Je crée un nouveau serveur en HTTPS via Node
// Je lui passe :
// - mes options HTTPS (certificat, clé)
// - l'application créée avec ExpressJS
https.createServer(httpsOptions, app).listen(PORT, () => {
  console.log(`API is listening on http://localhost:${PORT}`);
});

```
