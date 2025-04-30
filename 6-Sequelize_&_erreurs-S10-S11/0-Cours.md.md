# basics

remplace pgpool pour gérer l'accès à la base de donnée

## import via Sequelize

pour créer une table dans la BDD depuis une classe, on définit la class dans modele :

```js
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/sequelize.js";

export class Difficulty extends Model {}

Difficulty.init(
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
        underscored : true // permet à sequelize de savoir qu'il peut remplacer le pascal case par un underscore : is_correct = IsCorrect
    }
);
```

puis on crée un script d'import du modele en question, dans un fichier .js quelconque.
Exemple :

```js
import "dotenv/config.js";
import { sequelize } from "../config/sequelize.js";
import "../app/models/Answer.model.js";
import "../app/models/AppUser.model.js";
import "../app/models/Difficulty.model.js";
import "../app/models/Question.model.js";
import "../app/models/Quiz.model.js"; 
import "../app/models/Tag.model.js";
await sequelize.sync({force:true});
```

