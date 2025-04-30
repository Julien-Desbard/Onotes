# Evenements

Evénement = quelque chose qui se produit quand l'utilisateur interagit avec la page (souris, clavier). Et aussi quelques événements automatiques ("chargement du DOM terminé" par exemple).

On attache un "écouteur d'événement" avec la méthode _addEventListener_. 2 paramètres :
- nom de l'événement (respecter les noms prédéfinis) : clic sur l'élément, saisie d'un caractère sur le clavier, etc
- traitement à appliquer quand l'événement se produit. Ce traitement sera peut-être appelé une fois, 3 fois, jamais. Il faut donc que ce traitement soit une fonction, plus précisément une définition de fonction 

```js
function handleClickOnRichButton() {
    console.log("Tu crois vraiment qu'il suffit de cliquer sur un bouton pour être riche ?");

    // ici on pourrait modifier le DOM
}

buttonElement.addEventListener('click', handleClickOnRichButton);
```

❔ Pourquoi pas de parenthèses ? Parce qu'on ne veut pas appeler la fonction nous-mêmes, on veut fournir la fonction pour qu'elle soit appelée si l'événement correspondant se produit. On appelle ça _callback_.

**callback** c'est quand on fournit à une fonction une autre fonction, que la première fonction utilisera la deuxième le nombre de fois qu'elle veut, avec les arguments qu'elle veut.

```js
// /!\ code faux
buttonElement.addEventListener('click', handleClickOnRichButton());
```

Si on met les parenthèses : le traitement s'applique automatiquement à l'affichage de l'élément, et ne s'applique pas quand on clique

Et si on ne place pas le traitement dans une fonction ? ça ne marche pas non plus

```js
// /!\ code faux
buttonElement.addEventListener('click', console.log("toto"));
```

On peut avoir une fonction anonyme (pour des instructions courtes / pour un traitement non réutilisable ailleurs que dans l'écouteur d'événement).

```js
buttonElement.addEventListener(
    'click', 
    function() {
        console.log("Tu crois vraiment qu'il suffit de cliquer sur un bouton pour être riche ?");
    }
);
```

## Premier exemple

```js
// sélectionner le bouton dans le DOM
const buttonElement = document.querySelector('#button-rich');

// on définit le traitement à appliquer quand le bouton reçoit un clic => on appelle cette fonction un handler d'événement
function handleClickOnRichButton() {
    console.log("Tu crois vraiment qu'il suffit de cliquer sur un bouton pour être riche ?");

    // ici on pourrait modifier le DOM
}

// quand le bouton reçoit un clic, il faut appliquer le traitement suivant
// => on met en place un écouteur d'événement
// .addEventListener('evenement', traitement à appliquer sous forme de fonction)
buttonElement.addEventListener('click', handleClickOnRichButton);
```

## Deuxième exemple : utilisation des informations de l'événement


En ajoutant un paramètre à la fonction qu'on fournit à _addEventListener_, on peut récupérer des informations à propos de l'événement. 

On peut nommer le paramètre comme on veut, généralement c'est _evt_ ou _event_.

```js
// sélectionner le bouton dans le DOM
const buttonElement = document.querySelector('#button-rich');

// on définit le traitement à appliquer quand le bouton reçoit un clic => on appelle cette fonction un handler d'événement
function handleClickOnRichButton(event) {
    // console.log("Tu crois vraiment qu'il suffit de cliquer sur un bouton pour être riche ?");

    // on peut accéder à des informations sur l'événement
    console.log(event);

    // ici on pourrait modifier le DOM
}

// quand le bouton reçoit un clic, il faut appliquer le traitement suivant
// => on met en place un écouteur d'événement
// .addEventListener('evenement', traitement à appliquer sous forme de fonction)
buttonElement.addEventListener('click', handleClickOnRichButton);
// => addEventListener fera appel à la fonction handleClickOnRichButton, et il fournira en argument les informations sur l'événement : coordonnées du clic...
```

Les informations sont différentes selon le type d'événement, par exemple pour un clic on a les coordonnées x et y du clic, pour un événement de clavier on a la touche saisie.

## Pour aller plus loin : exemple d'un événement de saisie au clavier

```html
<body>
    <h1>Découverte du langage JavaScript</h1>
    <input id="text-input" type="text" />
    <button id="buttonToBeRich">Clique ici pour être riche !</button>
    <script src="js/index.js"></script>
</body>
```

```js
const inputElement = document.querySelector('#text-input');

inputElement.addEventListener('keydown', function(event) {
    console.log('keydown déclenché pour le caractère : ' + event.key);
});
```

## Exemple avec deux boutons

```js
// compter les clics sur le bouton oui
let counterYes = 0;

// compter les clics sur le bouton non
let counterNo = 0;

// handler quand on clique sur le bouton oui
function handleClickOnButtonYes() {
    // - augmenter de 1 le compteur de clics
    counterYes++;
    // counterYes = counterYes + 1;

    // - écrire la nouvelle valeur du compteur dans le span qui est sur le bouton
    document.querySelector('#counter-yes').textContent = counterYes;
    // on fournit un nombre, mais ce sera converti automatiquement en texte puisqu'on utilise textContent
}

// handler quand on clique sur le bouton non
function handleClickOnButtonNo() {
    counterNo++;

    document.querySelector('#counter-no').textContent = counterNo;
}

// quand on clique sur le bouton oui il faut déclencher handleClickOnButtonYes
const buttonYes = document.querySelector('#yes');
buttonYes.addEventListener('click', handleClickOnButtonYes);

// quand on clique sur le bouton non il faut déclencher handleClickOnButtonNo
const buttonNo = document.querySelector('#no');
buttonNo.addEventListener('click', handleClickOnButtonNo);
```

### /!\ textContent contient une information de type string

```js
function handleClickOnButtonNo() {
    // counterNo++;

    // Et si on additionnait le nombre qui est dans le DOM  au lieu d'avoir un compteur dans une variable ?
    // => récupérer la valeur actuelle du span, faire +1, renvoyer la nouvelle valeur dans le span

    const currentContent = document.querySelector('#counter-no').textContent;

    document.querySelector('#counter-no').textContent = currentContent + 1;
}
```

=> on a dans le bouton "01" puis "011" puis "0111" etc, ça a concaténé au lieu d'additionner

On pourrait utiliser parseInt, ou alors on stocke le compteur sous forme de nombre dans une variable JavaScript.

## Propagation des événements - target vs currentTarget

Quand un élément reçoit par exemple un clic, ce clic est ensuite propagé à son parent, en déclenchant les handlers d'événement rencontrés => propagation.

Un élément qui est le premier à recevoir l'événement (dans notre cas le span au-dessus du bouton) => `target` dans les informations de l'événement

A différencier de l'élément sur lequel on a placé notre handler (le bouton dans notre cas) => `currentTarget` dans les informations de l'événement

Cf target_currentTarget.png

## Bouillonnement (bubbling) et capture

https://developer.mozilla.org/fr/docs/Learn/JavaScript/Building_blocks/Events#le_bouillonnement_et_la_capture

(scroller à la partie "le_bouillonnement_et_la_capture", vers la fin)

## Le cas des formulaires

Sur un formulaire, on écoute l'événement _submit_ (disponible uniquement sur les `<form>`, pas sur d'autres éléments).

Cet évenement a un comportement par défaut qui sera appliqué automatiquement après notre handler : retourner sur l'URL de la page, donc repartir à zéro pour l'affichage.

Souvent on veut empêcher ce comportement : on met en place un paramètre pour le handler d'événement pour récupérer les infos de l'événement, et on applique la méthode _preventDefault_ sur cet élément.

```html
<body>
    <div id="shopping-list">
        <h1>Liste de courses</h1>
        <form id="shop-item-form">
            <input id="shop-item-input" type="text" placeholder="Entrez un produit" />
            <button type="submit">OK</button>
        </form>
        <ol id="shop-items"></ol>
    </div>

    <!-- on demande à appliquer le code JavaScript fourni -->
    <script src="./js/index.js"></script>
</body>
```

```js
const formElement = document.querySelector('#shop-item-form');

function handleSubmit(event) {
    // l'événement submit a un comportement par défaut : rechargement de la page (on repart à zéro)
    // généralement ça nous embête => on va empêcher ce comportement par défaut
    event.preventDefault();

    // console.log('formulaire soumis !');

    // on récupère la valeur de l'input => attribut value de l'input
    const inputValue = document.querySelector('#shop-item-input').value;

    // - créer un li et l'ajouter dans la liste des courses
    // on crée un li
    const liElement = document.createElement('li');
    // on place le contenu de l'input dans le li
    liElement.textContent = inputValue;

    // on récupère le ol
    const olElement = document.querySelector('#shop-items');

    // on ajoute le li dans le ol
    olElement.appendChild(liElement);

    // on vide le contenu de l'input maintenant qu'on l'a utilisé pour le li
    document.querySelector('#shop-item-input').value = '';
}

formElement.addEventListener('submit', handleSubmit);
```

## Désactiver un écouteur d'événement : removeEventListener

=> il faut utiliser un handler nommé

```js
function handleScroll() {
    console.log('scroll : ' + window.scrollY);
}
window.addEventListener('scroll', handleScroll);

// on annule l'écouteur d'événement
window.removeEventListener('scroll', handleScroll);
```