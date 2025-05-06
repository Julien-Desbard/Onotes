# Définition des schémas

exempCf.le S12

- je définis mes schémas de contrôle

```js

import { z } from "zod";

export const listSchema = z.object({
  // est ce que on a bien un title
  // ce title est il une chaine de caractere
  // ce title est non vide une fois qu'on a supprimé les espaces avant/apres
  title: z.string().trim().nonempty(),

  // est ce qu'on une position optionelle
  // si oui, est elle un nombre entier positif
  position: z.number().int().positive().optional(),
});

// pour la modification des listes, c'est le meme schema,
// mais tous les champs doivent etre optionnels
export const updateListSchema = listSchema.partial();
```

## Mise en application des schémas

```js
// Créer une liste
export async function createOne(req, res) {
  // je passe la data reçue à la moulinette de mon schéma
  // si c'est successfull, Zod me renvoit data et je peux l'utiliser dans la suite de ma fonction
  const data = listSchema.parse(req.body); // { title: 'Nouvelle liste' }

  // créer la liste avec cete data
  const newList = await List.create(data);

  // renvoyer la liste créée avec le status http 201 (created)
  res.status(201).json(newList);
}
```
### Annuaire des schémas

- je stock mes schémas dans un dossier schemas / list.js par exemple ; schema / utils.js pour ce qui est utilitaire et transverse a plusieurs controllers
- pour éviter de multiplier les fichiers d'imports, je peux les importer dans un fichier index et les exporter de ce même fichier (comme les associations entre les models sequelize)

```js
import { listSchema, updateListSchema } from "./list.js";
import { idSchema } from "./utils.js";

export { listSchema, updateListSchema, idSchema };
```