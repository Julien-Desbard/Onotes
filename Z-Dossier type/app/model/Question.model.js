import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/sequelize.js";

export class Question extends Model {}

Question.init(
    {
        name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {
        sequelize,
        tableName: "question"
    }
);