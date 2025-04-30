// tous les modules nodes s'importent comme ceci node:module
import os from "node:os";
console.log(os);

const formateur = "Ben";
console.log(`Aujourd'hui c'est ${formateur} qui donne cours`);

const places = [
    "Petreto-Bicchisano",
    "Toulon",
    "Jacou",
    "Montpellier",
    "Clapier",
    "Cazouls les Beziers",
    "Pouzols",
    "Castelnau le lez",
];

console.log(`${formateur} a habité dans les endroits suivants :`);
// pour faire un retour ligne dans le terminal, la syntaxe dépends de l'os que vous utilisez, pour rendre notre application multiSupport on va utiliser le module os qui connait l'os depuis lequel le programme est executé
// os.EOL sera dynamique, ici contient \n
console.log(os.EOL);
for (const city of places) {
    console.log(city);
}
console.log(os.EOL);
console.log("EXO 1 :");

// EXO numéro 1 -> pas besoin de module
//  écrivez 3 constantes qui contiendrons un nombre aléatoire chacune compris dans la range de votre choix, nombre entier
// quand une fonction fléché a un algo simple et une valeur simple à retourner, on peut utiliser le return implicite en une ligne
const max = 10_001;
const randomInt = (max) => Math.floor(Math.random() * max);
// 10001 pour un nombre inclus entre 0 et 10k
// je fais un tableau avec 3 éléments
const numbers = [randomInt(max), randomInt(max), randomInt(max), randomInt(max)];
console.log(numbers);
// ... s'appelle le spreaOperator, permet de déplier le tableau
const maxNumber = Math.max(...numbers);
// j'ai bien mon nombre maximum qui ressort
console.log(maxNumber);

// EXO numéro 2 -> besoin d'un module node js
console.log(os.EOL);
console.log("EXO 2 : ");
//  récupérez dans une constante le nombre de secondes depuis lequel votre pc / vm est allumé
const uptimeSeconds = Math.round(os.uptime());
//  convertissez les secondes en heures pleines, arrondissez à l'heure finis (par exemple 0h45min ça fait 0, 2h10, ça fait 2)
const uptimeHour = Math.floor(uptimeSeconds / 3600);
// switch case est la solution quand on veut vérifier une égalité sur une seul variable et pleins de cas possibles
switch (uptimeHour) {
    case 0:
        console.log("Travaille feignasse");
        break;
    case 1:
        console.log("C'est l'heure d'une petite pause");
        break;
    case 2:
        console.log("Wow on ne t'arrête plus");
        break;
    case 3:
        console.log("Tu es une machine");
        break;
    default:
        console.log("Va te coucher");
        break;
}