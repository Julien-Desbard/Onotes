# filter

```js
// exo ocode 02 12
function computeNbOfTallPokemons() {
    //je filtre pokemons pour savoir si il contient un element pour lequel element.height est supérieur ou égale à 200
const result = pokemons.filter ((pokemon) => pokemon.height >= 200)
return result
}
```

## some

```js

// exo ocode 02 12
// je cherche les poemons qui ont le type electric

function getElectricPokemonNames() { 
// electrique est indiqué dans un des types.name, je crée une fonction qui va retourner true si l'un des types.name === "electric"
const elec = (types) => types.name === "electric" 
// ensuite, je filtre le tableau et j'utilise .some pour identifier ceux qui contiennent "electric" 
const result = pokemons.filter ((pokemon) => pokemon.types.some(elec))
return result
}
console.log(getElectricPokemonNames())
```
