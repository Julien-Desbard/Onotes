import dataMapper from "../dataMappers/dataMapper.js"


export const loadCategoriesMiddleware = async (req, res, next) => {
    try {
        const categories = await dataMapper.getCategoriesWithNumberFigurines();
        response.locals.categories = categories;
        next();
        
    } catch (error) {
        console.log(error);
        response.status(500).send("Erreur lors de l'utilisation de la bdd");
    }
}

