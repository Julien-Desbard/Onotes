# Formulaires

Deux manières de récupérer les data des formulaires :

à l'ancienne :

```js
 // Pour récupérer les informations d'un formulaire, on faisait de la sorte
 const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
 //  // On n'empêche le formulaire de s'exécuter
 event.preventDefault();

 //  On récupère le form
 const form = event.currentTarget;

 //  // On crée un formData
 const formData = new FormData(form);

 // On récupère ensuite nos données grâce à la méthode "GET" du formData
 // et à l'attribut "name" de l'input
 const flavour = formData.get('flavour');
 const color = formData.get('color');

  const macaron = {
   flavour,
   color,
  };

  // On affiche les données récupérées
  onSubmit(macaron);
 };
```

méthode récente :

```js
  // Version React 19.x avec les server components
  // Plus d'infos : https://react.dev/reference/react-dom/components/form#props
 // Fonction permettant de gérer la récupération des informations du formulaire d'un macaron
 const handleAction = (formData: FormData) => {
  const flavour = formData.get('flavour') as string;
  const color = formData.get('color') as string;
  const macaron = {
   flavour,
   color,
  };
  // 🟢 Je passe le macaron à ajouter à ma fonction récupérée en prop
  onSubmit(macaron);
 };
```

## Champ controlé

On peut utuiliser un champ controlé pour utiliser la data saisie par l'utilisateur au fur et à mesure qu'il tape dans un champs input.

Sert par exemple dans un champs de recherche interactif pour filter  des élements selon le critère saisi (Blog o'clock ou l'on filtre en live els posts selon leur catégorie an saisissant le nom de la catégorie dans un champs de recherche)

```jsx
  Filtre :{" "}
   <input
    type="text"
     // si le user tape sur une touche on modifie le state pour modifier l'affichage
    onChange={(eventChange) => {
     setFiltervalue(eventChange.currentTarget.value);
    }}
      // la valeur du champs est définie à celle du state 
    value={filtervalue}
   />
```
