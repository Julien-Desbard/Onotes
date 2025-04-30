```js

// EXEMPLE pourris avec des callback ce qui créerait un callback hell en finalité
// mettre popo entre parenthèse et le remettre avec () plus loin dans la fonction, indique que si on a une valeur entre paranthèse (popo), il devra s'agir d'une fonction.
const devenirAmiCallback = (popo) => {
    setTimeout(() => {
        console.log("Nous sommes enfin devenu ami");
        popo();// ici je dis que popo doit être une fonction
    }, 2000);
};

const tenterMaChanceCallback = () => {
    devenirAmiCallback(() => {
        console.log("Je tente un bisous furtif");
    });
};

const devenirAmiPourLaVie = () => {
    devenirAmiCallback(() => {
        console.log("Je deviens ton ami pour la vie");
    })
}

const jeGardeDesPossibilite = () => {
    console.log("regarde avec attention les amis de mes amis...");
};

// fonction asynchrone qui prend du temps
tenterMaChanceCallback();
// fonction rapide
jeGardeDesPossibilite();
```