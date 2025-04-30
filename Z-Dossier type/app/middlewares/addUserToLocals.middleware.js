import { AppUser } from "../models/index.js";


// Dans le but d'avoir un user qui est toujours à jour dans la session, ce middleware check l'id du user en session et va actualiser le user par rapport à la bdd
// par exemple si le user se fait ban, ça permettrait de bloquer son compte à l'instant
export const addUserToLocals = (req, res, next) => {
    //  ajouter un user si user il y a dans les locals ainsi que dans la session 
    const userId = req.session.userId;
    if(userId){
        const user = AppUser.findByPk(userId);
        req.session.user = user;
        res.locals.user = user;
    }
    next();
}