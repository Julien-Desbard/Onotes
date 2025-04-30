// exemple de modèle pour une création via Sequelize

import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/sequelize.js";

// pour créer une classe, on utilise le modèle ci-dessous

export class Difficulty extends Model {}

// ci-dessous je paramètre mes tables via le modèle car l'ORM (sequelize ici) pourrra les créer sur cette base
Difficulty.init( //cf. saison 10 pour comprendre d'ou vient difficulty
    {
        // Model attributes are defined here
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    },
    {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        // sequelize par defaut cherche la table au pluriel si vous ne suivez pas la convention il faut préciser le nom de table
        tableName: "difficulty",
        // par defaut sequelize pense qu'il y a des champs created_at et updated_at dans toute les tables, ce code permet d'annuler ce comportement
        timestamps: false
    }
);

