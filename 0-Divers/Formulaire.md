# Utiliser un formulaire en mode POST

 
```js
// Ajouter dans l'index :
app.use(express.urlencoded({extended: true})) 

// le formulaire :  
 <form action="/search/element" method="post">
  <label for="element"></label>
  <select name="element" id="element">
<input type="submit" value="Chercher">
</form>
```

```js
// les infos sont dispos comme suit : 
const info = req.body.element
// un objet element, faisant référence au trio for/name/id du formulaire, est ajouté au body et contient l'info saisie dans le champs du formulaire
```

Si on veut ajouter les infos du formulaire dans un tableau, il faut ajouter appendfile

```js
import { appendFile } from 'node:fs';
router.post("/suggestion", (req, res) => {
    // la route de traitement de mon formulaire -> route en post donc bien que le meme nom que la route du dessus le verbe http va faire l'arbitrage entre les deux
    //  dans un futur proche, on mettrait les infos de req.body en base de données
    const pseudo = req.body.pseudo;
    const movie = req.body.movie;
    // fileSystem est un module de node qui permet de traiter des fichiers du systeme
    // il a une fonction appendFile qui permet d'ajouter des elements dans un fichier
    // la fonction prend en 1 argument le chemin
    // en deuxieme argument les donnees
    // en troisieme argument une callback d'erreur
    appendFile(
        path.join(import.meta.dirname, "data", "suggest.txt"), 
        `${pseudo} nous suggère de rajouter le film :${movie} à notre bdd ${os.EOL}`, 
        (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
    }); 
}) 
```
## Afficher une liste selectionnable dans le formulaire

```js
<h1>Chercher des cartes</h1>

<h3>Par élément</h3>
<form action="/search/element" method="post">
  <label for="element"></label>
  <select name="element" id="element">
      <option value="null">aucun</option>
    <option value="tonnerre">tonnerre</option>
    <option value="terre">terre</option>
    <option value="glace">glace</option>
    <option value="vent">vent</option>
    <option value="poison">poison</option>
    <option value="feu">feu</option>
    <option value="eau">eau</option>
    <option value="sacré">sacré</option>
  </select>
  <input type="submit" value="Chercher">
</form>
```