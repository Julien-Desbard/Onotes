// un module avec pleins de fonction utilitaires comme par exemple notre nombre aléatoire, notre valeur random d'un tableau

// Pour exporter une fonction, une variable, on peut exporter ce qu'on veut, du moment qu'on le precede du mot clé *export

// on peut exporter une fonction
export const randomNumber = (max) => {
    return Math.floor(Math.random() * max);
}

export const getRandomvalueFromArray = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}

// dans un module on exporte que ce que qu'on veut exporter, certaines variables / fonctions peuvent servir qu'à arriver à un resultat dans le module
const num1 = 10;
const num2 = 20;

// on peut exporter une simple variable avec une valeur (objet, tableau, nombre, string )
export const result = num1 + num2;


// c'est possible d'exporter à la fin du fichier plutôt que directement sur les déclaration

// export {randomNumber, getRandomvalueFromArray, result};