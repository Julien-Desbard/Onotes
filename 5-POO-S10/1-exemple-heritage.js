import { Hero } from "./Heros-poo.js";

// ici je crée une classe magicien qui part d'un Hero, il benificiera donc de toute ça structure / propriété / fonction
class Magicien extends Hero{

    #intelligence = 100;
   
    constructor(name, weapon){
        // super appelle le constructeur de la classe parente
        super(name, weapon)
    }

    bouleDeFeu(target){
        console.log(`${this.name} lance une boule de feu sur ${target.name}`);
        target.health -= 80;
        console.log(`${target.name} a désormais ${target.health} points de vies`);
        this.#intelligence -= 10;
    }
}

const gandalf = new Magicien("gandalf", "staff");
const pipin = new Hero("pipin", "dagger");

gandalf.bouleDeFeu(pipin);