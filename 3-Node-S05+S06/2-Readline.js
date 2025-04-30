// création d'un objet readline avec toutes les fonctionnalités du modules readline
import * as readline from "node:readline";
// import uniqumeent de stdin et stdout de process et création d'une variable input, output correspondante
import { stdin as input, stdout as output } from "node:process";

// ma fonction randomInt
const randomInt = (max) => Math.floor(Math.random() * max);
// readline a une méthode createInterface qui va me permettre de jouer avec le terminal et de communiquer avec l'utilisateur
const rl = readline.createInterface({ input, output });
// rl.question prend en callback ce qu'on va faire avec la réponse
// * rl.question permet de poser qu'une question et on aimerai crée un échange entre notre terminal et l'utilisateur
// rl.question("Node js c'est bien ?  ", (answer) => {
//     console.log(`Ta réponse :  ${answer}`);
//     rl.close();
// });
console.log("Bienvenue sur le jeu du juste prix");
console.log("Devinez le nombre mystère");
//  générer un nombre random
const price = randomInt(5);
rl.on("line", (userInput) => {
    // je m'assure d'avoir bien un nombre et je le convertis si besoin
    const userNumber = Number(userInput);
    if(userNumber > price){
        console.log("c'est moins");
    }else if (userNumber < price) {
        console.log("c'est plus");
    }else if (userNumber === price){
        console.log("Bravo !!! ");
        rl.close();
    }else{
        console.log("Rentrez un nombre valide");
    }
});