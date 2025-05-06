import { DataTypes, Model } from "sequelize";
import { sequelize } from "../models/sequelize-client.js";

export class Card extends Model { }

Card.init(
    {
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        color: {
            type: DataTypes.STRING(7),
        },
        position: {
            type: DataTypes.INTEGER,
            defaultValue : 1,
        },
    },
    {
        sequelize,
        tableName: "card",
    }
);
