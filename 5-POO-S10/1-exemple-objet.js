// Pour créer une classe, il faut utiliser le mot clé "class" suivi d'accolades
// une classe est un moule qui va servir à créer des objets
export class Hero {
    // dans une classe il est possible d'y intégrer des propriétés, ça permet de cadrer les propriétés qui seront définis dans les instances(objets) plus tard
    #name;
    #weapon;
    #health = 100;

    // le constructeur comme son nom l'indique permet de construire l'objet avec les valeurs données
    // comme toute fonction, il est possible de donner une valeur par défaut aux propriétés du constructeur
    constructor(name, weapon){
        // this fait reference à l'instance de la classe (l'objet) dans lequel le constructeur sera utilisé
        // par exemple dans le cadre de const argaron = new Heros(name)
        // this = aragorn
        this.name = name;
        this.weapon = weapon;
        // si on veut éviter les propriétés dynamiques (empeche l'ajout de propriétés qui ne sont pas dans la classe)
        Object.preventExtensions(this);
    }
    // une fonction dans une classe c'est une méthode
    attack(target){
        // je m'assure que target est bien une instance d'un hero 
        if(!(target instanceof Hero)){
            throw new Error("Tu tapes dans le vide");
        }
        console.log(`${this.name} attaque ${target.name} avec son ${this.weapon}`);
        target.#health -= 30;
        target.checkIfDead();
    }
    healthPotion(){
        console.log(`${this.name} a pris une potion et gagne 20 points de vies`);
        target.#health += 20;
    }
    checkIfDead(){
        if(this.#health <= 0){
            console.log(`${this.name} est mort ... RIP`);
            this.#health = 0;
        }else{
            console.log(`${this.name} a toujours ${this.#health} de vie`);
        }
    }

    // j'ai crée une propriété privé health, on ne peut plus y accéder ni en modification ni en lecture ni en ecriture
    // en créant un getter je redonne la possibilité d'y accéder mais je peux y ajouter l'algo que je veux avec
    // ici j'affiche la valeur comme avant de manière classique, ça permet d'accéder à la valeur de la propriété privé
    get health(){
        return this.#health;
    }
    // je cadre la façon dont la propriété est modifié
    set health(value){
        this.#health = value;
    }
    get weapon(){
        return this.#weapon;
    }
    set weapon(value){
        // je mets une liste d'armes autorisés
        const weaponsLegit = [
            "sword",
            "dagger",
            "staff",
            "bow",
            "axe"
        ]
        // je check si l'arme fournis fait bien parti des armes autorisés
        if(weaponsLegit.includes(value)){
            this.#weapon = value;
        }else{
            throw new Error("Arme invalide");
        }
    }
    get name(){
        return this.#name;
    }
    set name(value){
        this.#name = value;
    }
    
}


// si les classes sont le moule pour créer des objets, la syntaxe suivante permet d'utiliser le moule et de stocker l'objet dans une variable


