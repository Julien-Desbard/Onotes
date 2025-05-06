import { DataTypes, Model } from "sequelize";
import { sequelize } from "../models/sequelize-client.js";

export class List extends Model {}

List.init(
    {
        title: {
            type: DataTypes.TEXT,
            allowNull: false,
               },
        position: {
            type: DataTypes.INTEGER,
            defaultValue : 1,
                },
    },
    {
        sequelize,
        tableName: "list",
    }
);
