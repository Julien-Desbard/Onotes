on voudrait inclure ces deux lignes dans une fonction nommée generateNumber :

```js
const randomNumber = Math.random() * 500;
const secretNumber = Math.round(randomNumber);
```

Plus loin dans le code, on a besoin du nombre secret :

```js
if (responseAsNumber === secretNumber) {
```

------

```js
// générer un nombre aléatoire entre 0 et 500
function generateNumber() {
    const randomNumber = Math.random() * 500;
    const secretNumber = Math.round(randomNumber);

    // dès que la fonction termine son exécution, secretNumber est détruit
    // => on fait sortir de la fonction la valeur du nombre secret

    return secretNumber;

    // on pourrait construire la valeur et directement la retourner
    // return Math.round(Math.random() * 500));
}

// .......... du code

// techniquement on peut utiliser directement la valeur sans stocker dans une variable, mais pour notre challenge on a besoin de garder le même nombre secret pour les tentatives du joueur

//if (responseAsNumber === generateNumber()) {

// on stocke dans une variable le résultat de l'appel à la fonction
const leNombreSecret = generateNumber();
console.log('Le nombre secret est : ' + leNombreSecret);

if (responseAsNumber === leNombreSecret) {
    // .......... du code
}
```

