// POur l'utiliser dans un controller par exemple

import { Difficulty } from "../models/Difficulty.model.js";

export const home = async (req, res) => {
    // const difficulties = await Difficulty.findAll();
    // exemple pour une création via formulaire en get
    // await Difficulty.create({name: req.query.name});
    // exemple de modification et de recuperation d'une seul difficulté
    // je récpuère ma diffficulté via son id
    const difficulty = await Difficulty.findByPk(1);
    // j'ai crée une instance difficulty, tirée de la table difficulty via la requête juste au dessus, et je modifie son contenu name : 
    difficulty.name = "modifié par sequelize";
    // Je sauvegarde les valeurs modifiées dans mon instance dans la bdd en sauvegardant cette instance. 
    // Elle modifiera la ligne de la BDD correspondant à cette instance, liée via la Primary Key (pk)
    difficulty.save();
    res.render("main/home");
}