dans un projet on a ce code :

```js
2- const question1 = "Quel est le langage qui permet l'interactivité sur les sites web ?";
3- const solution1 = "JavaScript";

5- const reponse1 = prompt(question1);

7- if (reponse1 === solution1) {
8-    alert("Gagné !");
9- } else {
10-    alert("Perdu...");
11- }

13- const question2 = "En quelle année a-t-il été inventé ?";
14- const solution2 = "1995";

16- const reponse2 = prompt(question2);

18- if (reponse2 === solution2) {
19-    alert("Gagné !");
20- } else {
21-     alert("Perdu...");
22- }
```

C'est répétitif, non ? On pourrait peut-être mutualiser avec une fonction ?

Idées :
- 1/ poser la question => lignes 5 et 16
- 2/ la comparaison de réponse / la partie if => lignes 7-11 et 18-22
- 3/ les questions et solutions et reponses => lignes 2-11 et 13-22


Réflexion :
1/ pas très intéressant sur ce projet, ça mutualise juste une ligne de code (et il faudrait utiliser "return")
2/ très pertinent, il faudrait 2 paramètres pour la fonction, pour y injecter la réponse fournie et la solution => checkAnswer
3/ très pertinent => askQuestionAndCheckAnswer


Mission : écrire une fonction checkAnswer pour vérifier la réponse de l'utilisateur  et l'utiliser dans le code

Correction :

```js
/* définition d'une fonction avec 2 paramètres : réponse et solution */
function checkAnswer(reponse, solution) {
    // si la réponse fournie est égale à la solution, donc si la valeur du paramètre reponse
    // est égale à la valeur du paramètre solution
    if (reponse === solution) {
        alert("Gagné !");
    } else {
        // alert("Perdu...");
        // si on veut changer le message, on a juste à changer cette ligne
        alert("Perdu... Ce n'est pas " + reponse);
    }
}

// on peut éventuellement vérifier notre fonction en l'appelant dans la console
// checkAnswer("2020", "1995");
// => alerte avec "Perdu"
// checkAnswer("1995", "1995");
// => alerte avec "Gagné"


const question1 = "Quel est le langage qui permet l'interactivité sur les sites web ?";
const solution1 = "JavaScript";

const reponse1 = prompt(question1);

// on veut vérifier la réponse de l'utilisateur à la question 1
// on fournit comme arguments des valeurs qui sont contenues dans des variables
checkAnswer(reponse1, solution1);
// deux intérêts avec notre fonction : 
// - on voit directement l'intention : "vérifier la réponse"
// - si on veut changer le comportement de validation de réponse, on change à un seul endroit dans le code

// On aurait pu fournir directement la valeur de la solution plutôt que la variable
// checkAnswer(reponse1, "JavaScript");

const question2 = "En quelle année a-t-il été inventé ?";
const solution2 = "1995";

const reponse2 = prompt(question2);

checkAnswer(reponse2, solution2);
```





