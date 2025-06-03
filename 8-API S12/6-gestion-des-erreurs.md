# Basics

 - console.error est le console.log des erreur
 - err.name = nom de l'erreur. Ex : ZodError, referenceError...

## Errur 404 personnalisée

Fichier .js logés dans les middleware qui modifie la classe error pour l'enrichir : 
```js
export class HttpError extends Error {
    constructor(statusCode, message) {
      super(message);
      this.statusCode = statusCode;
    }
  }
```

### middleware centralisé

```js
// middleware erreur centralisé
router.use((err, req, res, next) => {

  console.error(err);

  // si il s'agit d'une erreur de validation "ZodError"
  if (err.name === "ZodError") {
    // on renvoie une erreur 400
    res.status(400).json({ "error": err.errors });
    return;
  }

  // si il s'agit d'une erreur 404 personalisée (HttpError)
  if (err.statusCode === "404") {
    res.status(404).json({ "error": err.message });
    return;
  }

  res.status(500).json({ "error": "Something went wrong" });
});

// middleware 404 générique
router.use((req, res) => {
  res.status(404).json({ "error": "Ressource Not found" });
});
```