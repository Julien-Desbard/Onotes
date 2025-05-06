import { Card } from "./Card.model.js"
import { Tag } from "./Tag.model.js"
import { List } from "./List.model.js"
import { Sequelize } from "sequelize";


// Chaque orm en général a un systeme de bidirectionnalité, ça veut dire qu'independamment d'ou est la clé étrangère j'ai accès à la difficulté depuis question et j'ai accès aux questions depuis difficultés
//? les relations vont dans les deux sens
// ? je traite d'abord une entité a avec b
// ? puis on échange et b avec a
// ? à la fin on a une relation bidirectionnel
// ? question est dispo dans difficulty via l'alias questions
// ? difficulty est dispo dans question via l'alias difficulty
// Pour définir les contraintes de cardinalité, on prend l'indice de droite. 
// Ex : 0-n  1-n, on a n-n donc c'est many to many // 0-1 1-n on a 1-n donc c'est one to many
// la table avec la plus grande cardinalité donne sa clef étrangère à l'autre table
List.hasMany(Card, {
    foreignKey: "list_id",
    allowNull : true, // ici je traduit la cardinalité la plus faible qui est de 1, si elle est de 0,inutile de mettre quelque chose
    as: "cards",//car je veux toutes les questions liées à cette difficulté ==> Pluriel
});

Card.belongsTo(List, {
    foreignKey: "list_id",
    as: "list",// car je veux la difficulté associée à cette question ==> Singulier
})

// belongToMany necessite l'ajout de la propriété through, c'est le nom de la table de liaison
Card.belongsToMany(Tag, {
    // je passe par la table "card_has_tag"
    through: "card_has_tag", // je nomme ma table de laison pour éviter que Sequelize le fasse pour moi
    foreignKey: "card_id", //ne nomme ma clef etrangère
    otherKey: "tag_id", // je nomme la seconde clef étrangère pour que Sequelize n'ait pas à la deviner
    as: "tags"
})

Tag.belongsToMany(Card, {
    through: "card_has_tag",
    foreignKey: "tag_id",
    otherKey: "card_id",
    as: "cards"
  });

  // nos modèles importés sont sans relations, une fois les relations ajoutées, je les exporte pour pouvoir les utiliser
export {List, Card, Tag, Sequelize}
export { Difficulty, Question, Answer, AppUser, Tag, Quiz };
// mes prochains imports de modèles devront se faire depuis le fichier association et plus depuis les modèles eux-mêmes