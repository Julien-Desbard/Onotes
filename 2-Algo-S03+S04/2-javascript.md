# JavaScript

## Code JavaScript pour le navigateur

### La console

JavaScript peut modifier l'affichage, mais ça on en parlera dans quelques jours...

On peut voir autrement le résultat de ce qu'on fait ?

La **console** (dans les "outils de développement" du navigateur) : 
- indique des erreurs qui se sont produites sur la page ou dans le code JavaScript
- le développeur peut y afficher des choses, y appliquer du code JavaScript => pratique notamment pour faire des essais de code, pour apprendre

La console est un outil pour le développeur, pas pour l'internaute

Pour demander au navigateur d'écrire quelque chose dans la console, on va utiliser `console.log();` et on mettra entre les parenthèses ce qu'on veut qu'il affiche.

⚠️ Le code JavaScript pour un site Internet doit être écrit dans des fichiers. Le code qu'on écrit dans la console c'est pour découvrir le langage, pour nous aider à l'écriture du code (**debug** = vérifier le résultat produit par notre code).
En fait cette console c'est un peu comme quand on simule des changements de code HTML ou de CSS dans le dev tool : on va simuler ce que fait le navigateur si on lui donne telle instruction en langage JS.

Il y a plusieurs types de données qu'on peut demander à afficher, on va commencer par ce qu'on appelle une chaîne de caractères (un texte). Pour que le navigateur comprenne que ce qu'on lui donne dans les parenthèses c'est un texte, on devra mettre des guillemets autour : "le texte".

```js
console.log("Bonjour");
```

Et si on se trompe ? Par exemple si on oublie de fermer un guillemet ?

> Uncaught SyntaxError: Invalid or unexpected token

=> message en rouge dans la console. Il ne faut pas le prendre comme une insulte, mais plutôt comme un conseil. Bon, c'est vrai, pour le moment on ne comprend pas trop le conseil, mais ça viendra avec l'habitude. Ici on a une erreur de syntaxe, un caractère qui n'est pas valide ou qui n'est pas celui attendu

Astuce : la console conserve un historique de ce qu'on a fait, on peut facilement reprendre notre instruction précédente pour la corriger.

La flèche "haut" du clavier permet de récupérer une instruction précédente, puis les autres flèches permettent de naviguer (comme dans le terminal).

Quand on écrit du code JS, il est conseillé de toujours avoir la console ouverte dans le navigateur, comme ça si on se trompe dans le code on verra apparaître une erreur, un indice pour nous aider à trouver le problème dans notre code.

Note : le copier-coller dans la console n'est pas autorisé de base avec Google Chrome pour éviter des problèmes de sécurité

https://en.wikipedia.org/wiki/Self-XSS

https://developer.chrome.com/blog/self-xss

### Où écrire le code JavaScript ?

Le navigateur qui affiche un site Internet a pour base un fichier HTML, c'est ce fichier qui devra fournir le code JavaScript.

Deux emplacements possibles pour le code JavaScript :
- directement dans le fichier HTML => pas pratique (c'est tout mélangé, et on ne peut pas réutiliser le code)

```html
<body>
    <h1>Découverte du langage JavaScript</h1>
    <script>
        console.log("Bonjour");
    </script>
</body>
```

- dans un fichier à part (ou plusieurs fichiers, si on a beaucoup de code et qu'on veut encore mieux ranger)

On crée un dossier _js_, et à l'intérieur un fichier _index.js_.

```js
console.log("Bonjour depuis le fichier");
```

```
 <script src="js/index.js"></script>
```

(à la fin du _body_ ou dans la balise _head_)

## Code JavaScript pour un "serveur" => à partir de la saison 5

## Les instructions

- une instruction par ligne

```js
console.log("Bonjour depuis
le fichier");
```
=> code non valide, erreur de syntaxe

💡 VSCode souligne en rouge quand la syntaxe n'est pas correcte. On pourra utiliser plus tard un "correcteur de syntaxe" plus puissant, qui nous donnera aussi des conseils

```js
console.log("Bonjour"); console.log("Salut");
```
=> pas d'intérêt à regrouper plusieurs instructions sur la même ligne, le code est moins lisible

- `;` à la fin de la ligne _"s'il te plaît"_

Techniquement il est possible de ne pas mettre de `;`, mais dans ce cas JS cherchera tout seul où est la fin de l'instruction, il peut se tromper et 💥 ça produit un bug

## Les commentaires

Commentaires c'est pour que les développeurs puissent noter des informations pour eux, qui ne seront pas traitées par le navigateur (expliquer pourquoi on a fait de cette façon, se noter un rappel de chose à faire _TODO_, etc).

On peut aussi les utiliser pour désactiver temporairement une partie du code.

```js
/*
  Commentaire
  sur
  plusieurs
  lignes
*/

// Commentaire sur une seule ligne

// console.log('test');
```

## Les variables

Une variable (en JS et aussi dans d'autres langages de programmation) c'est une "boîte" pour stocker une information.

C'est utilisé pour stocker une information qui va nous servir plusieurs fois, ou une information qui change au fil du temps.

On donne un nom à cette boîte pour pouvoir la repérer quand on veut utiliser son contenu.

![](schemas/variable.png)

Pour modifier le contenu d'une variable qu'on avait créée avant :

![](schemas/variable2.png)


### Nom d'une variable ?

C'est le développeur qui choisit le nom d'une variable :
- qui a du sens, qui indique ce qui est contenu dans cette "boîte"
- unique (deux variables ne peuvent pas avoir le même nom, et il ne faut pas utiliser un mot de vocabulaire du langage : _const_, _if_, etc)
- de préférence en anglais
- par _convention_, le nom d'une variable commence par une minuscule
- sans espaces et sans tirets : pour séparer les mots on met des majuscules au début de tous les mots sauf le premier (on appelle ça `camelCase`) => _favoriteColor_


**Conventions de code** : des règles d'écriture pour que les développeurs s'y retrouvent plus facilement. Un peu comme quand on dit qu'en français une phrase commence par une majuscule => c'est pas obligatoire, mais c'est beaucoup plus pratique quand tout le monde respecte les conventions.

### const ou let ?

_const_ c'est quand on veut stocker quelque chose qui ne changera pas de valeur (Javascript va même nous interdire de changer la valeur, pour qu'on évite de faire des bêtises)

/!\ ça n'empêche pas complètement de modifier le contenu de la variable (notamment pour les tableaux), ça empêche uniquement de REMPLACER par une autre valeur.

_let_ c'est quand on veut stocker quelque chose qui changera de valeur.

=> on utilisera le plus souvent possible _const_, et on réservera _let_ pour les cas où la variable a besoin de changer de valeur dans la suite des instructions.

### Exemple de construction de deux variables

```js
/*
Objectif : 3 messages à afficher
- Bonjour, on est lundi
- Bonjour, on est mardi
- Bonjour, on est mercredi

=> Deux variables : une pour "Bonjour, on est " (toujours la même valeur) et une autre pour le jour de la semaine (qu'on fera varier pour les 3 affichages)
*/

// on construit une variable pour le début du message
// => la valeur ne changera pas, on utilise const
const beginMessage = "Bonjour, on est ";
// camelCase => une majuscule à chaque mot sauf au premier

// ou 
// let beginMessage = "Bonjour, on est ";

// console.log(beginMessage); // OK

// console.log(BeginMessage);
// Erreur "BeginMessage is not defined" => tentative d'utilisation d'une variable qui n'a pas été définie

// console.log("beginMessage");
// Affiche le texte beginMessage, pas le contenu de la variable

// on construit une variable qui s'appelle day et qui contient le texte lundi
let day = "lundi";

// TODO afficher le message

day = "mardi";

// si on utilise le mot-clé const, on interdit de redéfinir le contenu de la variable, erreur "Assignment to constant variable" si on essaie l'instruction day = "mardi";

// pour vérifier le nouveau contenu de la variable
console.log(day);

```

💡 on peut regarder la valeur d'une variable avec _console.log_ : `console.log(day)` => pas de guillemets autour de _day_, sinon ça écrira le texte "day" et pas le _contenu de la variable day_.

### Exemple complet

```js
/*
Objectif : 3 messages à afficher
- Bonjour, on est lundi
- Bonjour, on est mardi
- Bonjour, on est mercredi

=> Deux variables : une pour "Bonjour, on est " (toujours la même valeur) et une autre pour le jour de la semaine (qu'on fera varier pour les 3 affichages)
*/

// on construit une variable pour le début du message
// => la valeur ne changera pas, on utilise const
const beginMessage = "Bonjour, on est ";

// on construit une variable qui s'appelle day et qui contient le texte lundi
let day = "lundi";

// on construit le message complet : assemblage de chaînes de caractères = concaténation
const message = beginMessage + day + " !";
console.log(message);

day = "mardi";
console.log("day vaut : " + day);

/*
Possibilités :
- construire une nouvelle variable (message2)
- modifier la variable message => utiliser let pour la création de la variable
- fournir directement à console.log le texte à afficher
*/
console.log(beginMessage + day + " !");

// TODO afficher le message pour mercredi
```

On appelle **concaténation** l'assemblage de plusieurs textes avec le caractère "+"

## Quelques types de données en JavaScript

- des _chaînes de caractères_ (_string_ en anglais)

On peut utiliser `"` ou `'` 

```js
const message = "Bonjour";
const message = 'Bonjour';
```

S'il y a des apostrophes ?
```js
const message = "C'est facile";
const message = 'C\'est facile';
```

=> Caractère _antislash_, Alt Gr + 8

Et si on veut ranger dans une variable un texte avec des guillemets ?

```js
const message = "my name is \"Bond\"";
const message = 'my name is "Bond"';
```

A voir plus tard : template string, avec le caractère backtick ` 

- des _nombres_ (_number_) : entier ou décimal

```js
const numberOfCats = 2;
const temperature = 16.5;
const population = 12254454;
```

- des _booléens_ (_boolean_) pour stocker une information qui ne peut être que _vraie_ ou _fausse_, il n'y a que 2 valeurs possibles : `true` et `false` (sans guillemets).

```js
let lightOn = true; // vrai
lightOn = false; // faux

// affichage en mode clair
const displayDark = false;
```

Souvent on commence le nom de la variable par _is_, pour repérer facilement que c'est un booléen

```js
// "est-ce que l'affichage est sombre"
const isDisplayDark = false;
```

### Opérations sur les nombres

Soustraction :

```js
const currentYear = 2025;
const birthYear = 1983;
const myAge = currentYear - birthYear;
```

Multiplication :

```js
const price = 50;
const quantity = 4;
const total = price * quantity;
```

Division :

```js
const gramsOfCake = 1000;
const friendsCount = 5;
const gramsPerPerson = gramsOfCake / friendsCount;
```

Addition :

```js
const age = 24;
const ageAfterBirthday = age + 1;
```

### Le problème avec + en JavaScript

En JS le signe `+` représente 2 choses : addition de nombres et concaténation de chaînes de caractères. Si on mélange les deux types de données le résultat peut être surprenant 😜 (JavaScript essaie de deviner quelle opération appliquer, généralement en regardant le type de la première valeur).

```js
// une variable qui contient un nombre
const nbCats = 2;

// on adopte un nouveau chat
const newNbCats = nbCats + 1;
console.log(newNbCats); // 3 (addition)
```

```js
const nbCats = "2";

// on adopte un nouveau chat
const newNbCats = nbCats + 1;
console.log(newNbCats); // 21 => on a mélangé nombres et chaînes de caractères, JS décide entre concaténation et addition, là il a choisi concaténation

// => on essaiera d'éviter cette situation de mélange de types avec +, si besoin on convertira l'une des données dans l'autre type
```


### Portée des variables

Quand on crée une variable, elle est disponible (utilisable) dans une certaine partie du code, pas forcément "partout".

```js
const age = 8;

if (age > 3) {
    let tarif = 75;
}

console.log(tarif);
// Erreur : tarif is not defined
// => la variable tarif n'est pas disponible ici
```

=> la variable _tarif_ est disponible uniquement entre les accolades du _if_, elle est limitée à un **bloc de code**, on dit que sa **portée** c'est ce bloc de code.

Un **bloc de code** c'est une partie qui est entre des accolades (un _if_, un _else_, une boucle, une fonction...).

La **portée** d'une variable, c'est dans quelle partie du code elle est disponible, _jusqu'où_ elle est disponible.

Astuce : en cliquant sur le nom d'une variable dans VSCode, les accolades correspondant à sa portée sont encadrées.

❔ Et s'il n'y a pas d'accolades autour de la définition d'une variable (avec let ou const) ?
=> La portée de cette variable n'est pas limitée à un bloc de code, la variable est disponible partout (dans le fichier et aussi dans les autres fichiers JS).

❔ Et si on a un bloc de code B à l'intérieur d'un autre bloc A ? Les variables créées dans le bloc A sont disponibles dans le bloc B. Les variables créées dans le bloc B sont limitées au bloc B.

> les parents peuvent aller dans la chambres des enfants mais les enfant n'ont pas le droit d'aller dans la chambre des parents

Autres exemples :

```js
function doSomething() {
  const toto = 19;
}

// toto n'est pas disponible ici
console.log(toto);
// Erreur toto is not defined

// pour le for, la variable n'est pas définie entre les accolades, mais elle sera quand même disponible uniquement dans le code du for
for (let index = 0 ; index < 8 ; index++) {
  console.log("coucou");
}

// index n'est pas disponible ici
console.log(index);
```

```js
let name = "Mélanie"; // portée : le fichier entier
const age = 8; // portée : le fichier entier

if (age < 3) {
    let tarif = 0; // portée : les accolades du premier if
    console.log(tarif); // OK, variable disponible ici
} else {
    // BLOC A
    let message = "Bienvenue au parc, le tarif est 75 euros"; // portée : les accolades du else
    console.log(message); // OK, variable disponible ici
    console.log(tarif); // Erreur, variable non disponible ici

    if (name === "Patrick") {
        // BLOC B
        console.log(message); // OK, variable disponible ici, parce qu'on est encore dans le bloc du else (on est dans un sous-bloc)
        message = "Bienvenue au parc Patrick, ton tarif spécial est 50 euros";

        const toto = 18; // portée : les accolades du if avec le prénom
    }
}

console.log(tarif); // Erreur, variable non disponible ici
console.log(message); // Erreur, variable non disponible ici

console.log(name); // OK, variable disponible ici
console.log(age); // OK, variable disponible ici
```

Astuce : une solution pour "faire vivre" une variable après le bloc de code => créer la variable avant le bloc de code.

```js
const age = 8;

let tarif;

if (age > 3) {
    tarif = 75;
} else {
    tarif = 0;
}

console.log(tarif); // OK, on a bien accès au tarif qui vaut 75
```

si une variable n'est utilisée que dans un bloc, on la crée à l'intérieur du bloc, si on va en avoir besoin après le bloc, on la crée à l'extérieur





### Mots-clés pour définir une variable

- const, let : ça existe depuis 2015 en JavaScript, permettent d'avoir une portée _locale_, au niveau d'un _bloc de code_ (un ensemble d'instructions)
- var : `var toto = 19;`, ça existe depuis toujours en JavaScript, permet d'avoir une portée _globale_

```js
const age = 8;

if (age > 3) {
    var tarif = 75;
}

console.log(tarif);
// OK, tarif est disponible

var tarif = "gratuit";
// avec var, aucun problème pour JavaScript, c'est autorisé, la variable est écrasée sans message d'erreur
// ... mais pour les développeurs, gros risque de bugs
```

## undefined

`undefined` est une valeur spéciale en JavaScript qui veut dire "sans valeur" 💥.

C'est par exemple ce qu'on aura dans une variable qu'on a créée sans donner de valeur :

```js
let message;
console.log(message); // undefined
```

## Evolutions au fil du temps

JavaScript, comme beaucoup de langages et d'outils, évolue au fil du temps. 

C'est généralement des ajouts d'outils, des nouvelles syntaxes plus pratiques. Il y a rarement des suppressions d'outil.

Double nommage : numéro de version et année, par exemple "ES6" et "ES2015" c'est la même chose (version 6, sortie en 2015)

Certaines versions ont davantage de nouveautés que d'autres, cette fameuse version ES6 était carrément une révolution.

### Nouveautés de la version ES6 / ES2015

- let et const :tada: (avant il y avait juste var)
- fonctions fléchées
- template string
- for...of
- etc

## Template string

C'est une autre façon de faire des concaténations, en français "littéraux de gabarit".

```js
const firstName = "Mélanie";
const age = 39;

const message = "Je m'appelle " + firstName + ' (' + age + ' ans)';
// bon courage pour les espaces...
```

Avec template string :

```js
const message = `Je m'appelle ${firstName} (${age} ans)`;
console.log(message); // Je m'appelle Mélanie (39 ans)
```

On encadre avec des backticks ` , et on peut injecter des parties variables en mettant entre $ et accolades.

- PC : Alt Gr + 7
- Mac : directement la touche à côté de Entrée

Entre les ${} on place du code Javascript, on peut transformer une variable ou faire un calcul :

```js
const message = `Je m'appelle ${firstName} (${age - 10} ans)`;
console.log(message); // Je m'appelle Mélanie (29 ans)
```


Pratique pour ne pas avoir d'ambiguité entre addition et concaténation :

```js
const widthValue = `${result}px`;
// on aura forcément une chaîne de caractères, même avec result qui est de type number
```