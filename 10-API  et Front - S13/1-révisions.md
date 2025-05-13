# Intervenir sur le DOM

```js
// ======================= Récupérer un élément du DOM =========================

// On récupère le h1 par son tag
document.querySelector("h1");

// On récupère le h1 par son ID
document.querySelector("#title");
document.getElementById("title");

// On récupère le H1 par sa classe
document.querySelector(".title");
document.getElementsByClassName("title")[0]; // je récupères tous les élements de la classe indiquée, ils sont restitués sous la forme d'un tableau, je peux donc indiquer un index si je souhaite récupérer un seul élement

// ====================== Modifier le style d'un élément ======================

// Changez la couleur d'arrière-plan du titre principal
titleElement.style.backgroundColor = "yellow";

// Changez la couleur de la police de caractères
titleElement.style.color = "#ff00ff";

// ========================= Ajouter une classe sur un élément ====================

// Ajoutez une classe `underline` sur l'élément `titleElement`
titleElement.classList.add("underline");

// Supprimez la classe `title` de `titleElement`
titleElement.classList.remove("title");

// BONUS : SI vous souhaitez vérifier la présence d'une classe ou non et lui permettre de l'ajouter / le supprimer,utilisez toggle()
titleElement.classList.toggle("title");

// ============================= Réagir à un évènement ======================

// Sélectionnez le bouton présent dans l'intégration
const button = document.querySelector(".button");

// Ajoutez un écouteur d'événement afin d'ajouter le texte "Bingo !"
// addEventListener prend deux arguments en paramètres :
// - l'événement à écouter (par exemple un clic, une action, ...)
// - Une fonction de rappel afin d'indiquer que va faire cette action
button.addEventListener("click", () => {
  button.textContent = "Bingo !";
});

// Ajoutez un écouteur d'événement au scroll de l'utilisateur
window.addEventListener("scroll", (event) => {
  console.log(event);
});


```
