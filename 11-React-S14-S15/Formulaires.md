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
