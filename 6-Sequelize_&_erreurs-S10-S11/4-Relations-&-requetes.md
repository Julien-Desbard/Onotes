
## relations

Dans sequelize la mise en place des relations est prévu via : [lien](https://sequelize.org/docs/v6/core-concepts/assocs/)

exemple : 
```js
Difficulty.hasMany(Question, {
    // la clé étrangère effective en bdd
    foreignKey: "id_difficulty",
    // je mets un alias, ce qui me créera un champs dans le model du nom donné ici par exemple : Difficulty.questions stockera les questions lié à la difficulty
    as: "questions"
});
```
### Probleme : dépendance circulaire

Il n'est pas possible de faire les relations directement dans les modèles, car ça créerait un import circulaire entre le model A et le model B (le model A a besoin du B pour s'importer, en important le B il a besoin du A pour s'importer), nous avons donc droit à une belle erreur.

### La solution : Un fichier unique de création de relation

La solution est d'importer tous les models dans un fichier et de définir les relations dans ce fichier. A la fin on exporte les models et ils seront récupérés depuis ce fichier unique.

### les différentes options : 

- __foreign key__ : sert à préciser le nom de la foreign key qui gère la relation en bdd
- __as__ : c'est similaire à un alias en requêtes sql, ça nous permettra d'accéder au données de la table lié en passant par cet alias, par exemple (pour la définition) :
```js
Quiz.belongsTo(AppUser, {
    foreignKey: "id_app_user",
    as: "appUser",
});
// ALIAS
// ici par exemple je pourrais Quiz.getAppUser -> ça me donnera les infos du user lié au quiz
```
exemple pour l'utilisation : 
```js
quizzes[0].getTags();
// tags est l'alias, getTags va donc être crée par sequelize
```
- __through__ : Utilisable pour les relations many to many, sert à spécifier la table qui stocke les clés étrangères

#### Eager Loading vs lazy loading 

[lien de la doc ](https://sequelize.org/docs/v6/core-concepts/assocs/#fetching-associations---eager-loading-vs-lazy-loading)

- lazy = je récupère ce dont j'ai besoin quand j'en ai besoin
```js
    // exemple de chargement de tags sur un quiz après coup (lazy loading)
    const tags = await quizzes[0].getTags();
    console.log(tags);
```
- eager = je récupère tout ce dont j'ai besoin d'un coup
```js
 // exemple d'eager loading, on charge les user en meme temps que les quiz
    const quiz = await Quiz.findAll({
        include: "appUser"
    });
    console.log(quiz[0].appUser.firstname);
```


##### Création des relations

```js
import { Answer } from "./Answer.model.js";
import { AppUser } from "./AppUser.model.js";
import { Difficulty } from "./Difficulty.model.js";
import { Question } from "./Question.model.js";
import { Quiz } from "./Quiz.model.js";
import { Tag } from "./Tag.model.js";

// Chaque orm en général a un systeme de bidirectionnalité, ça veut dire qu'independamment d'ou est la clé étrangère j'ai accès à la difficulté depuis question et j'ai accès aux questions depuis difficultés
Difficulty.hasMany(Question, {
    foreignKey: 'id_difficulty',
    as: "questions"
});
Question.belongsTo(Difficulty, {
    foreignKey: 'id_difficulty',
    as: "difficulty" // j'indique que je veux pouvoir importer les difficultés lors de de mes requêtes sans faire appel à l'objet difficulty dans ma requête
});

export {Difficulty, Question};
```

###### Gestion des requetes

```js
import { Difficulty } from "../models/index.js"; // je n'importe que difficulty mais pas questions car j'ai déclaré "difficulty" dans mes relations cf. ci-dessus

export const list = async (req, res) => {
    // exemple de lazyLoading, je charge que les questions de la difficulté facile
    // lazy loading quand on a besoin de conditionner la jointure (trie, jointure que sur un element ect ect -> if)
    const difficulties = await Difficulty.findAll();
    const easy = difficulties[0];
    const easyQuestions = await easy.getQuestions();
    console.log(easyQuestions);
    //exemple de eager loading
    const difficulties = await Difficulty.findAll({include: "questions"}) // si on ne met pas as : "difficulty" lors de la déclaration des relations (cf. ci-dessus), il faudra inclure l'objet Questions dans le include et donc l'importer dans le fichier
    console.log(difficulties);
    console.log(difficulties[0].questions); // ici on accède aux questions qui sont logées dans un tableau dans l'objet difficulties
    res.render("difficulty/list")
};

```
