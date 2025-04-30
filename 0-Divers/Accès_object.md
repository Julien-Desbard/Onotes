# objet

```js
const cafe = {
  nom: 'café ',
  describe: 'chaud',
  ref: '1',
  origine: 'origine',
  prix: '12.34',
  caracteristiques: 'corsé',
  disponible: 'oui'
}

console.log(cafe.nom) // donne le résultat café
```
## Tableau

```js
const couleurs = ['rouge', 'vert', 'bleu', 'jaune'];

const premiereCouleur = couleurs[0];
console.log(premiereCouleur); // Affiche : rouge
```

### Un tableau contenant des objets

```js
const cafes = [
  {
    nom: 'Espresso',
    prix: 2.50,
    origine: 'Italie'
  },
  {
    nom: 'Cappuccino',
    prix: 3.00,
    origine: 'Italie'
  },
  {
    nom: 'Americano',
    prix: 2.80,
    origine: 'États-Unis'
  }
];

// accès aux objts via l'index
const premierCafe = cafes[0]; // Accède au premier objet (index 0)
console.log(premierCafe);
// Output: { nom: 'Espresso', prix: 2.50, origine: 'Italie' }

//accès au contenu des objects via l'index puis à la clef

// Accéder au nom du premier café
const nomPremierCafe = cafes[0].nom;
console.log(nomPremierCafe); // Affiche : Espresso

// Accéder à l'origine du troisième café en utilisant la notation par crochets
const origineTroisiemeCafe = cafes[2]['origine'];
console.log(origineTroisiemeCafe); // Affiche : États-Unis

```
