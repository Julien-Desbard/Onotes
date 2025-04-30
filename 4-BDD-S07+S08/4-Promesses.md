# les bases

https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Using_promises

```js
const cuireUnSteak = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.floor(Math.random()* 2) === 1) {
                console.log("le steak est cuit");
                resolve();
            }else{
                reject("Le steak a brulé");
            }
        }, 2000);
    })
};

const preparerUneSalade = () => {
    console.log("La salade est prête");
}

const preparerUnBurger = async () => {

    // await va permettre de dire : j'attends d'avoir une promesse en resolve
    // la syntaxe try catch va permettre de gérer les cas ou la promesse est en reject
    try {
        await cuireUnSteak();
        console.log("Je monte mon burger et le sert");
    } catch (error) {
        console.log(error);
    }
}


preparerUnBurger();
preparerUneSalade();
```