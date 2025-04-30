# Planifier un traitement après un délai : setTimeout

Permet de retarder un traitement, prévoir un traitement qui s'appliquera à un moment précis dans le futur.

```js
setTimeout(traitement, duréeDeDécalage);
```

Le traitement doit être sous forme de callback (fonction anonyme ou nommée, pas directement des instructions).

La durée est indiquée en millisecondes : `1000` c'est une seconde.

```js
setTimeout(
    function () {
        console.log('coucou!');
    },
    3000
);
```

Le console.log est affiché 3 secondes après l'application de l'instruction setTimeout.

Avec une fonction nommée :

```js
function sayHello() {
    console.log('hello');
}

setTimeout(sayHello, 5000);
```
Le console.log est affiché 5 secondes après l'application de l'instruction setTimeout.


⚠️ le premier argument doit être indiqué sous forme de callback (une définition de fonction anonyme ou le nom d'une fonction nommé définie ailleurs) 

Syntaxes incorrectes :

```js
// /!\ exemples de code incorrect

setTimeout(sayHello(), 3000);
// => on veut une callback, on indique le nom de la fonction SANS PARENTHESES
// sinon ça applique le traitement immédiatement et éventuellement ça provoque aussi une erreur

setTimeout(console.log('coucou'), 3000);
// => on veut une callback, on doit placer le traitement DANS UNE DEFINITION DE FONCTION
// sinon ça applique le traitement immédiatement et éventuellement ça provoque aussi une erreur
```

## Annuler un timer avant qu'il se déclenche

`setTimeout` retourne un identifiant de timer, si on le stocke on peut s'en servir pour annuler le timer avant son déclenchement avec `clearTimeout` :

```js
const idTimer = setTimeout(sayHello, 10000);
clearTimeout(idTimer);
// => le traitement de sayHello ne se déclenche pas, le timer a été annulé avant les 10 secondes
```

# ESLint

Un assistant qui vérifiera la syntaxe utilisée lors de l’écriture d’un fichier JavaScript, afin de s’assurer du respect des bonnes pratiques, tout en nous aidant à améliorer notre code et éviter les bugs.

https://eslint.org

https://eslint.org/play/