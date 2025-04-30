import "dotenv/config"
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(process.env.PGDATABASE, process.env.PGUSER, process.env.PGPASSWORD, {
    host: "localhost",
    dialect: "postgres",
    // si vous voulez voir les requêtes sql qui passent
    logging:true, // à supprimer sur un serveur live
    // si vous avez des options spécifiques à tous les models, c'est possible de les ajouter comme ceci, la plupart des options à mettre dans define, sont possible à ajouter / modifier individuellement dans les models
    define: {
        underscored:true, // indique qu'on veut utiliser du snake case sur tous le snoms de tables, champs et les timestamps
        timestamps:false // 
    }
});

// tester la connection de sequilize oiur voir s'il est bien connecté

try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
} catch (error) {
    console.error("Unable to connect to the database:", error);
}
