import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/sequelize.js";

export class AppUser extends Model {}

AppUser.init(
    {
        email: {
            type: DataTypes.TEXT,
            // ici c'est contrainte -> donc technique et structure au niveau de postgresql
            allowNull: false,
            unique: true,
            // ici c'est des validations -> donc validation niveau js avant d'arriver à postgres
            validate: {
                // les validations sont listés dans la doc de sequelize
                isEmail: {
                     msg: "Votre email n'est pas valide",
                     args: true
                }
            },
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty : {
                    msg: "Ce champ ne doit pas être vide",
                    args : true
                }
            }
        },
        firstname: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Ce champ ne doit pas être vide",
                    args : true
                }
            },
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                is:{
                    args:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{8,}$/,
                    msg: "Le mot de passe doit avoir 8 caractères, 1 maj, 1 min, 1 carac spécial"
                } 
            }
        },
        role: {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: 'member',
        },
    },
    {
        
        sequelize, // je passe l'info de l'instance de connexion
        tableName: "app_user", // je choisis un nol de table
    }
);
