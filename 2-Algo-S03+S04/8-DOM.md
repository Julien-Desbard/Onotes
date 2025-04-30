# Le DOM

DOM (Document Object Model), c'est la représentation de la page que se fait le navigateur à partir du code HTML et CSS, et qui lui permet de construire l'affichage de la page.

Extension _DOM node tree viewer_ : https://chromewebstore.google.com/detail/dom-node-tree-viewer/jbplakkefflidgnjhckoahendgekokfc


On peut modifier des choses directement dans cette représentation (en JS donc), et ça modifiera l'affichage de la page.

Ce DOM c'est une représentation un peu comme un arbre généalogique, avec les balises HTML qui sont les gens de la famille, on va beaucoup utiliser les mots _parent_, _enfant_, _frère_, _grand-père_, etc.

```html
<nav>
    <a href="index.html">Accueil</a>
    <a href="biographie.html">Biographie</a>
</nav>
```

Ici les deux _a_ sont frères, ce sont les enfants du _nav_


Le DOM (Document Object Model) est une représentation de la structure d'un document web (comme une page HTML) sous forme d'objets et de propriétés interconnectés. C'est comme un arbre généalogique de la page web, où chaque élément HTML (comme un titre, un paragraphe, un lien, etc.) est un membre de l'arbre. On appelle chaque élément un "noeud" ou node en anglais

Pour pouvoir faire une action sur le DOM (modifier/ajouter/supprimer), il faudra qu'on sélectionne un emplacement dans l'arbre.

On peut accéder au DOM en JavaScript avec la variable `document` (qui existe automatiquement, sous forme d'objet).

⚠️ le fichier HTML ne sera pas modifié quand on fait des modifications sur le DOM

## Sélectionner des éléments dans le DOM

Pour pouvoir agir sur les éléments du DOM (modifier, ajouter, supprimer), il va d'abord falloir les sélectionner. 

Les principaux outils utilisés sont _getElementById_, _querySelector_, _querySelectorAll_

### getElementById

`getElementById` => sélectionner un élément dans le DOM à partir d'un id

Par exemple si dans la structure de la page on a un élément qui a l'id "main-title" :

```js
const element = document.getElementById('main-title');
console.log(element); // quand on passe la souris sur ce qui est affiché ça "surligne" l'élément correspondant sur l'affichage
```

### querySelector et querySelectorAll

`querySelectorAll` => sélectionner tous les éléments qui correspondent au **sélecteur CSS** indiqué

`querySelector` => sélectionner l'élément qui correspond au **sélecteur CSS** indiqué. S'il y a plusieurs éléments qui correspondent, c'est uniquement le premier qui sera fourni 

```js
// tous les éléments de la classe "magic"
const elements = document.querySelectorAll('.magic');
```

```js
// le premier élément (ou le seul élément) qui a la balise p
const element = document.querySelector('p');
```

```js
// l'élément qui a l'id main-title
const element = document.querySelector('#main-title');
```

```js
// l'élément qui est de type p et qui a un ancêtre de type article
const element = document.querySelector('article p');
```

```js
// l'élément (ou le premier élément s'il y en a plusieurs) qui est de type div et qui a la classe blue
const element = document.querySelector('div.blue');

// tous les éléments qui est de type div et qui a la classe blue
const element = document.querySelectorAll('div.blue');
```

## Modifier le DOM

Il y a beaucoup d'informations qu'on peut modifier sur les éléments du DOM.

Voici quelques exemples.

### Modifier le contenu d'un élément

Pour modifier le contenu d'un élément (ce qui est entre les balises ouvrante et fermante), on peut utiliser les noms de propriété _textContent_ si on fournit du texte, ou _innerHTML_ si on fournit du HTML

```js
// on sélectionne un élément du DOM, par exemple ici le premier paragraphe
const pElement = document.querySelector('p');
// modification du contenu avec juste du texte
pElement.textContent = 'Il était une fois ...';

// s'il y a des balises HTML dans le nouveau contenu, il faut utiliser innerHTML
pElement.innerHTML = 'Il était <em>une fois</em> ...';
```

Oui on peut utiliser const ici 😉 : on modifie des choses dans l'élément, on ne _remplace_ pas complètement le contenu de la variable

### Ajouter une classe CSS à un élément

L'outil _classList_ permet de gérer les classes CSS appliquées sur un élément.

```js
// on sélectionne un élément du DOM, par exemple ici le premier paragraphe
const pElement = document.querySelector('p');

// si on veut ajouter sur cet élément la classe CSS 'blue-text'
pElement.classList.add('blue-text');

// si on veut retirer de cet élément la classe CSS 'red-text' qui y était appliquée
pElement.classList.remove('blue-text');
```

### Supprimer un élément

On peut supprimer un élément du DOM avec `remove` : https://developer.mozilla.org/en-US/docs/Web/API/Element/remove

```js
// on sélectionne un élément du DOM, par exemple ici le premier paragraphe
const pElement = document.querySelector('p');

// on supprime cet élément du DOM => il disparait de l'affichage
pElement.remove();
```

### Ajouter un nouvel élément dans le DOM

4 étapes :
- créer un élément => créer un paragraphe, une div... (balise HTML)
- personnaliser l'élément (les propriétés) => par exemple textContent, innerHTML
- sélectionner dans le DOM l'élément qui sera le parent du futur élément => par exemple avec querySelector
- ajouter le nouvel élément en enfant de son parent => par exemple appendChild pour ajouter après les enfants déjà présents dans le parent


Ajouter un nouveau paragraphe à la fin de l'article :

```js
// créer un élément de type "p"
const newParagraphElement = document.createElement('p');

// personnaliser l'élément
newParagraphElement.textContent = "Une série géniale lorem ipsum";

// sélectionner le futur parent
const containerElement = document.querySelector('article');

// "adoption" du nouvel élément par le parent
containerElement.appendChild(newParagraphElement);
```

=> `appendChild` permet d'ajouter un élément en dernier enfant de l'élément parent indiqué. Syntaxe : `le-parent.appendChild(le-nouvel-élément)`

https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild


Et si on veut ajouter un paragraphe ailleurs qu'en dernier enfant de l'article ?

Il y a des outils pour ajouter un élément à un autre endroit qu'à la fin, par exemple avec `insertBefore` on peut indiquer aussi un "frère" avant lequel l'élément doit être placé :

https://developer.mozilla.org/fr/docs/Web/API/Node/insertBefore

```js
// on crée un élément et on le personnalise
const newParagraphElement = document.createElement('p');
newParagraphElement.textContent = "Une série géniale lorem ipsum";

// sélectionner le futur parent
const containerElement = document.querySelector('article');

// sélectionner le fils de ce parent avant lequel le nouvel élément doit être placé (ici un paragraphe qui a la classe special)
const brotherElement = document.querySelector('p.special');

// "adoption" du nouvel élément par le parent, avant le frère indiqué
// syntaxe : le-parent.insertBefore(le-nouvel-élément, le-futur-petit-frere)
containerElement.insertBefore(newParagraphElement, brotherElement);
```

# Comment utiliser ça dans un fichier JS ?

- mettre en place dans le projet un fichier .js
- faire le lien dans le fichier HTML : balise script à la fin du body
- dans le fichier JS on réagirait à des événements (par exemple quand on clique sur un bouton on a un élément qui s'affiche ou un élement qui disparait, ou etc)

Clic sur un bouton => on verra lundi

Autre possibilité : construire le minimum de la structure dans le fichier HTML, et ensuite construire le reste de l'affichage avec JavaScript

