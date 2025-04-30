# Le fonctionnement basic - je veux un résultat sous forme de tableau à plusieurs entrées

je range directement un résultat de fonction dans une variable

exemple :

```js
async getAllFifgurines() {
  try {
   const { rows } = await client.query(
    "SELECT * FROM figurine"
   );
   return allFigurines;
  } catch (error) {
   throw error;
  }
 },
 ```

au lieu de :

```js
async getAllFifgurines() {
  try {
   const resultt = await client.query("SELECT * FROM figurine");
   const allfigurines = result.rows
   return allFigurines;
  } catch (error) {
   throw error;
  }
 },
 ```

Le résultat de ma requete est dans un objet rows, contenu dans result. le destructuring me permlet de le loger directement dans un objet au lieu de passer par une variable intermédiaire.

## passer directement dans un object au lieu d'une variable - je veux un résulat sous forme de tableau avec une seule entrée

quand je fais la même chose mais en définissant ma varaible cible comme un objet, je récupère seuleemnt la première entrée du tableau qui m'est retourné en résultat.

```js
 async getOneFigurine(id) {
  try {
   const {rows: [oneFigurine]} = await client.query("SELECT * FROM figurine WHERE id = $1 LIMIT 1", [id]);
   return oneFigurine;
  } catch (error) {
   throw error;
  }
 },
```

ici, le résultat de la requête arrive dans rows ous la forme d'un tableau. Envoyer cette info dans [oneFigurine] fait que seule la première entrée de rows y sera logguée. Ce qui n'est pas un soucis si rows es tun tableau avec un seul résultat
