# Exercice

Stocker dans un objet des informations à propos de la France (en réfléchissant au type de données qui irait bien pour chaque information) :
- Plus grandes villes : Paris, Marseille, Lyon
- Population :  68000000
- Capitale : Paris, avec une population de 10890751

Etape 1 : construire l'objet

Etape 2 : travailler un peu sur l'objet

- Ah, on nous indique le nombre exact pour la population du pays : 68373433
=> modifier l'objet (avec une instruction supplémentaire) pour avoir cette nouvelle population

- On voudrait faire une phrase : "La troisième plus grande ville de France est **Lyon**, et la population de la capitale est **10890751** habitants"


# Etape 1

```js
/* on construit une variable en utilisant une donnée de type objet */
const franceData = {
    // une propriété pour les plus grandes villes => un tableau
    biggestCities: ['Paris', 'Marseille', 'Lyon'],

    // une propriété pour la population => un nombre
    population: 68000000,

    // une propriété pour toutes les informations à propos de la capitale => un objet
    capitalCity: {
        name: 'Paris',
        populationNumber: 10890751
        /* techniquement on pourrait utiliser population ici, mais on risque de se mélanger entre les 2 */
    }
};
console.log(franceData);
```

# Etape 2

```js
franceData.population = 68373433;

console.log('La troisième plus grande ville de France est ' + franceData.biggestCities[2] + ', et la population de la capitale est ' + franceData.capitalCity.populationNumber  + ' habitants');
```


