import { Answer } from "./Answer.model.js";
import { AppUser } from "./AppUser.model.js";
import { Difficulty } from "./Difficulty.model.js";
import { Question } from "./Question.model.js";
import { Quiz } from "./Quiz.model.js";
import { Tag } from "./Tag.model.js";

// Chaque orm en général a un systeme de bidirectionnalité, ça veut dire qu'independamment d'ou est la clé étrangère j'ai accès à la difficulté depuis question et j'ai accès aux questions depuis difficultés
//? les relations vont dans les deux sens
// ? je traite d'abord une entité a avec b
// ? puis on échange et b avec a
// ? à la fin on a une relation bidirectionnel
// ? question est dispo dans difficulty via l'alias questions
// ? difficulty est dispo dans question via l'alias difficulty
// Pour définir les contraintes de cardinalité, on prend l'indice de droite. 
// Ex : 0-n  1-n, on a n-n donc c'est many to many // 0-1 1-n on a 1-n donc c'est one to many
Difficulty.hasMany(Question, {
    foreignKey: "id_difficulty",
    as: "questions",
});
Question.belongsTo(Difficulty, {
    foreignKey: "id_difficulty",
    as: "difficulty",
});
//? exemple terminé pour question / difficulty

Quiz.hasMany(Question, {
    foreignKey: "id_quiz",
    as: "questions",
});

Question.belongsTo(Quiz, {
    foreignKey: "id_quiz",
    as: "quiz",
});

AppUser.hasMany(Quiz, {
    foreignKey: "id_app_user",
    as: "quizzes",
});

Quiz.belongsTo(AppUser, {
    foreignKey: "id_app_user",
    // author correspond au nom pour retrouver appUser dans un quiz
    as: "author",
});

Question.hasMany(Answer, {
    foreignKey: "id_question",
    as: "answers",
});

Answer.belongsTo(Question, {
    foreignKey: "id_question",
    as: "question",
});

// belongToMany necessite l'ajout de la propriété through, c'est le nom de la table de liaison
Tag.belongsToMany(Quiz, {
    through: "quiz_tag",
    foreignKey: "id_tag",
    as: "quizzes",
});

Quiz.belongsToMany(Tag, {
    // je passe par la table quizz_tag
    through: "quiz_tag",
    // ma clé étrangère (modèle courant -> Quiz)
    foreignKey: "id_quiz",
    // tu retrouveras la relations -> les tags -> dans la propriété tags
    as: "tags",
});

// nos modèles importé sont sans relations, une fois les relations ajoutés, je les exporte pour pouvoir les utiliser
export { Difficulty, Question, Answer, AppUser, Tag, Quiz };
