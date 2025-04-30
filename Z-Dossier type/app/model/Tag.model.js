import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/sequelize.js";

export class Tag extends Model {}

Tag.init(
    {
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true
        }
    },
    {
        sequelize,
        tableName: "tag"
    }
);