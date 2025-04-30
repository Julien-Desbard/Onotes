# Installation

- lancer `npm install ejs`
- indiquer au serveur que j'utilise EJS comme moteur de template --> Coller `app.set("view engine", "ejs");` en dessous des imports

```js
app.set("view engine", "ejs"); // On choisit notre view engine // (c'est là dedans que ejs sera require, mais c'est pas à nous de le faire)
```

## utilisation

- Pour utiliser ejs dans une page dynamique (`app.get`)utiliser `res.render`
- Ensuite, on indique la page vers laquelle on renvoit  `res.render ("home")`
- POur enovyer de la data dans cette page, on ajoute un objet en deuxième argument de la fonction

```js
res.render ("home", {variable, fonction(), objet[]...})
```

La data renvoyée est utilisable dans la nouvelle page (ici `"home"`)
Exemple :

```js
res.render("city", { cityObject, cityTime: getCityTime(cityObject) })
```

 qui renvoit à la page `city`, avec la variable `cityObject` et la variable `cityTime` qui est le résultat de `getCityTime(cityObject)`

### Views

- Views est le nom des pages vers lesquelles `res.render` renvoie, il faut les palccer dans un fichier views.
- elles sont automatiquement déclarées par EJS

```js
app.set("views", "./views");
```

#### Partials

- Pour éviter de répéter des bouts d'html sur chaque views, on peut créer des `Partials` qui sont en fait des morceaux récurrents du code html de ces pages.
- On y retrouve souvent les header et footer et on les déclare ainsi dans le fichier views : <%- include('partials/header.ejs', {title: "Bienvenue"}) %>
- On peut envoyer de la data dans le header également, ici avec la valeur de la variable `Title`que l'on retrouve dans le header et qui aura la valeur `Bienvenue`

##### Static

- Pour appliquer un fichier css, on doit le placer dans un dossier `public`et le déclarer ainsi dans le fichier ejs:

```js
app.use(express.static("public"))
```

dans le fichier html, la déclaration doit se faire ainsi :

```html
<link rel="stylesheet" href="/style.css"> <!-- mettre le chemin en prenant comme point de départ le fichier public>
```
