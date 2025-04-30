// import des models Sequelize
import "dotenv/config.js";
import { sequelize } from "../config/sequelize.js";
import "../app/models/Answer.model.js";
import "../app/models/AppUser.model.js";
import "../app/models/Difficulty.model.js";
import "../app/models/Question.model.js";
import "../app/models/Quiz.model.js"; 
import "../app/models/Tag.model.js";
await sequelize.sync({force:true});
