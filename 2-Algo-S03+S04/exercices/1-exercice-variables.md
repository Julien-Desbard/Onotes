# Exercice sur le thème des variables

On veut souhaiter l'anniversaire de Mélanie (qui avait 38 ans) en construisant une phrase.

Etapes de mise en place :
- 1/ stocker le prénom dans une variable
- 2/ stocker l'âge d'avant (38) dans une variable
- 3/ vérifier que le contenu des variables est correct (= afficher le contenu 😉)
- 4/ remplacer le contenu de la variable de l'âge par le nouvel âge de Mélanie (on ajoute 1)
- 5/ vérifier le contenu de la variable de l'âge
- 6/ afficher une phrase `Joyeux anniversaire (ici le prénom) ! Tu as maintenant (ici le nouvel âge) ans`

## Etapes 1 2 3

```js
const name = "Mélanie";
// autre possibilité : const name = 'Mélanie';
const age = 38;

console.log(name);
console.log(age);

// option : console.log("nom : " + name);
```

Quand on a vérifié, on supprime les console.log (ou on les désactive avec un commentaire si on pense qu'on aura besoin de refaire la même vérification)

# Etapes 4 et 5

Premier essai : 

```js
const name = "Mélanie";
// autre possibilité : const name = 'Mélanie';
const age = 38;

age = age + 1;
console.log(age);
```

Erreur "Assignment to constant variable." => il faut utiliser let pour la variable age.

```js
const name = "Mélanie";
// autre possibilité : const name = 'Mélanie';
let age = 38;

age = age + 1;
console.log(age);
```

# Etape 6

Première possibilité : construire directement le texte en faisant l'affichage

```js
const name = "Mélanie";
let age = 38;

age = age + 1;

console.log("Joyeux anniversaire " + name + " ! Tu as maintenant " + age + " ans");
```

Deuxième possibilité : préparer le texte dans une variable puis l'afficher

```js
const name = "Mélanie";
let age = 38;

age = age + 1;

const message = "Joyeux anniversaire " + name + " ! Tu as maintenant " + age + " ans";

console.log(message);
```

# Etape bonus : âge de l'année suivante

```js
const name = "Mélanie";
// autre possibilité : const name = 'Mélanie';
let age = 38;

age = age + 1;

let message = "Joyeux anniversaire " + name + " ! Tu as maintenant " + age + " ans";

console.log(message);

age = age + 1;
console.log("âge l'année suivante : " + age);

// console.log(message);
// => affiche le même message qu'avant, avec 39

// reconstruire le message
message = "Joyeux anniversaire " + name + " ! Tu as maintenant " + age + " ans";
console.log(message);

```

