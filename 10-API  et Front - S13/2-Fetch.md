# Récupérer les infos d'un endpoint

```js
// Je demande à écouter le module init au chargement du DOM. Je définis init plus loin dans le code
document.addEventListener("DOMContentLoaded", init);

// /!\ ATTENTION ! Mettre la fonction en asynchrone pour éviter qu'elle se charge avant l'initialisation du DOM
async function init() {
  // Je souhaite récupérer les informations de l'API
  // J'utilise fetch() en renseignant mon endpoint
  const httpResponse = await fetch("https://jsonplaceholder.typicode.com/posts");

  // Ensuite, je vais stocker le résultat au format JSON
  const posts = await httpResponse.json();

  console.log(posts);
}
```

## utiliser un template

- un template est une balise non sémantique dans le code qui contient du code que l'on peut cloner pour construire la page

```js
  // Je souhaite récupérer le template présent dans l'HTML pour afficher chacun de mes articles
  posts.forEach((post) => {
    // Sélectionner le template
    const postTemplate = document.querySelector("#post-template");

    // POur cloner le template afin d'y ajouter les informations d'un article, on va utiliser cloneNode
    // Seul el contenu entre les balises template est selectionné
    const postClone = postTemplate.content.cloneNode(true);

    // l'attribut slot est spécifique au tempalte et représente un emplacement dans leqeeul il est prévu qu'on intègre de la donnée
    // Pour ajouter le contenu de mon article (titre + corps de l'article, je vais sélectionner les valeurs de chaque attribut "slot"
    postClone.querySelector('[slot="post-title"]').textContent = post.title;
    postClone.querySelector('[slot="post-body"]').textContent = post.body; // slot est toujours dans un tableau, c'est une convention
  });
  ```

### envoyer des données à l'API

```js
// === Envoyer de l'information via l'API ===

  // Première chose, je vais récupérer le formulaire
  const form = document.querySelector("form");

  // J'ajoute un écouteur d'événement lorsque le formulaire est soumis aka envoyer vers l'API
  // Pour travailler avec l'API, je dois rendre la fonction de rappel asynchrone
  form.addEventListener("submit", async (event) => {
   
   // Je vais retirer l'action par défaut à la soumission du formulaire
    event.preventDefault();

    // Je souhaite récupérer les informations du formulaire
    // Je crée une récupération des données du formulaire via FormData
    // Que je transforme ensuite en objet via Object.fromEntries
    const body = Object.fromEntries(new FormData(form));

    // == FETCH : POST ==
    const httpResponse = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST", // On ajoute la méthode HTTP (on envoie de l'info)
      body: JSON.stringify(body), // On ajoute les informations à envoyer à l'API
      headers: { "Content-Type": "application/json" }, // On indique dans l'entête de requête le type de données envoyées (ici, du JSON)
    });

    const createdPost = await httpResponse.json();
    console.log(createdPost);
  });

```
