import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/sequelize.js";

// Model vient de sequelize
export class Answer extends Model {}

Answer.init(
    {
        // Model attributes are defined here
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        isCorrect: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    },
    {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        // sequelize par defaut cherche la table au pluriel si vous ne suivez pas la convention il faut préciser le nom de table
        tableName: "answer",

    }
);
