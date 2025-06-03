# Petits trucs

- vider l'affichage afin d'y remettre les infos corrigée, lors d'une MAJ de liste par exemple
```js 
document.querySelector('#lists-container').replaceChildren()
```

- selectionner les datas d'un formulaire pour les envoyer à l'API pour une MAJ : 
```js
  const taskData = Object.fromEntries(new FormData(event.currentTarget));
```