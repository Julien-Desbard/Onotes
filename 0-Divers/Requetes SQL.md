# Selections basiques

récupérer un élément dans la BDD :

```SQL
SELECT last_name FROM students;
```

récupérer toute une BDD :

```SQL
SELECT * FROM students;
```

Récupérer plusieurs éléments spécifiques:

```sql
SELECT last_name, first_name FROM students;
```

## SELECTION | WHERE

Pour faire une recherche sur une condition spécifique

```sql
SELECT * FROM promos where name = 'Tiramisu';
```
## Selections particulières

```js
// ============== récupérer le nom des colonnes d'une table =================
SELECT column_name // 
FROM information_schema.columns  // C'est une vue système qui contient des informations sur toutes les colonnes de toutes les tables de la base de données.
WHERE table_schema = 'public' // le plus souvent public sauf si quelqu'un l'a modifié
AND table_name = 'nom_de_la_table'
// enlever une colonne de cette selection, ajouter : 
 AND column_name <> 'nom_de_la_colonne'
