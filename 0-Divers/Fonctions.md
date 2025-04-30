# array.find

Exemple :

```js
app.get("/game/:nomDuJeu", (req,res) => {
    let writtenName = req.params.nomDuJeu // Récupère le nom du jeu indiqué dans la barre de recherche
    let gameName = gamesData.find((element) => element.name === writtenName) // cherche le nom du jeu dans le tableau gamesData et le compare à writtenName
    let gameIndex = gamesData.findIndex((element) => element.name === writtenName)}) // cherche le nom du jeu dans le tableau gamesData et renvoie son index
    
```

## forEach

```js
capitalCities.forEach(city => { %> //pour chaque élément du tableau capitalCities, dont les valeurs sont provisoirement logéés dans la variable city...
            <li><a href="/city/<%= city.name.toLowerCase() %>"><%= city.name %></a></li>})// crée un <li> et un <a>> avec le nom contenu dans chaque objet du tableau
```

```html
<ul>
    <% movies.forEach((movie, index) => { %> <!-- Ici j'utilise la variable index pour obtenir l'index pour chaque element du tableau-->
        <li><a href="/films/<%= index %>"><%= movie.title %></a></li>
    <% }) %>
</ul>
```

Le tableau en question :

```js
export const capitalCities = [
    {
        name: "Paris",
        tz: "Europe/Paris"
    },
    {
        name: "Londres",
        tz: "Europe/London"
    }
];
```

### fonction fléchée

```js
const randomValueFromArray = (array) => { // Récupère une valeur aléatoire pour un tableau. Remplacer array par le nom du tableau auqeul on veut appliquer la fonction
    return array[Math.floor(Math.random() * array.length)]}
```

Exemple appliqué :

```js
const hellos = [ // le tableau
    "Bonjour", // Français
    "Hello", // Anglais
    "Hola", // Espagnol
    "Hallo", // Allemand
    "Ciao", // Italien
    "Olá", // Portugais
];

${randomValueFromArray(hellos)}// la fonction appliquée au tableau
```

#### Truthy / falsy

```js
    <% if (game.cssFile) { }%>//je vérifie si game.cssFile est TRUTHYy. Détail : si game est null, alors il est Falsy, si game a une valeur, alors il est Truthy
    <% if (!game.cssFile) { }%> //je vérifie si game.cssFile est FALSY. Détail : si game est null, alors il est Falsy, si game a une valeur, alors il est Truthy
            <link rel="stylesheet" href="/css/<%=game.cssFile %>">
```

##### typeof

```js
typeof !== undefined // nous permet de prévenir javascript qu'on sait que potentiellement elle n'existe pas et de ne pas déclencher d'erreur dans ce cas
 if (typeof game !== "undefined" && game.cssFile) {// est-ce que j'ai un jeu (game) et si il est truthy (game.cssFile), alors j'affiche le résultat du if, 
 // sinon le if ne se déclenche pas
        <link rel="stylesheet" href="/css/<%=game.cssFile %>">}
```
