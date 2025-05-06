
import { sequelize } from "../models/associations.js";

// Je peux utiliser mon import ci-dessous une fois que j'ai déclaré mes associations ==> Il faut avoir importé et exporté sequelize dans le fichier des associations)
await sequelize.sync({ force: true });
console.log('All models were synchronized successfully.');