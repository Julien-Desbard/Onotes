# Useffect de base

Executé à chaque rendu :

```jsx
import { useEffect } from 'react';

useEffect(() => {
  // Code à exécuter
});
```

Executé une seule fois au montage :

```jsx
useEffect(() => {
  console.log("Composant monté");
}, []); // tableau vide = une seule exécution
```

Executé uniquement lorsqu'une varibale change :

```jsx
useEffect(() => {
  console.log("count a changé !");
}, [count]); // s'exécute seulement quand `count` change
```

## Useffect API

Pour éviter que le use effect ne tourne en boucle lors d'un appel d'API, on intègre un async / await au useffect

```jsx
useEffect(() => {
  // Pour résoudre une Promise (type appel d'API avec async / await), je vais créer une fonction asynchrone à exécuter dans mon useEffect
  const fetchData = async () => {
   // On fait l'appel à l'API
   const httpResponse = await fetch(
    'https://oclock-api.vercel.app/api/macarons',
   );

   // On traduit les résultats au format json()
   const macarons = await httpResponse.json();

   // Puis on passe les données à notre state
   setMacaronsList(macarons);
  };

  // On n'oublie pas d'appeler notre fonction asynchrone
  fetchData();
 }, []);
```

### Useffect Démontage

les actions à faire au démontage sont optionnelles :

```jsx
useffect (() => {
  // au montage du composant, je fais un premier appel à une fonction (par exemple une API)
  fetchdata();
  // les actions au démontage
return () => {
  // je dois faire ça au démontage...
  // remettre à zéro un state
  // vider le cache
  // changer du css
}})
```
