import { pgPool } from "../../config/pgPool.js"; // TODo a remplacer si on utilise Sequelize

export const findById = async (id) => {
    try {
         // ici je décompose l'objet result pour récupérer la valeur de rows et je décompose le tableau pour récupérer l'index 0 et mettre le tout dans la variable promo
        const {rows : [ promo ]} = await pgPool.query(`SELECT * FROM promos where id = $1 LIMIT 1`, [
            id
        ]);
        // si j'ai une promo je retourne promo sinon je retourne null
        // ? ça s'appelle l'opérateur de coalescence : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
        return promo ?? null;
    } catch (error) {
        // le datamapper a pour role d'accéder à la donnée ni plus ni moins, si une erreur surgit, je la passe au controlleur et lui choisira comment la traiter
        throw error;
    }
};
