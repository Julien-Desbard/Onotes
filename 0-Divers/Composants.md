# controller

```js
// importer le dataMapper dont on se sert dans le controller
import * as homeDatamapper from "../datamapper/homeDatamapper.js"

// le controller
export const catalogPage = async (req,res) => {
    try {
        const allCafe = await homeDatamapper.allCafe()
        res.render('catalogue',{allCafe})       
    } catch (error) {
        console.log(error);
        res.status(500).render("error",{title : "500", text : "Erreur serveur"});
    }
 
}
```

## dataMapper

Datamapper basic

```js
// Importer pgpool qui permet de faire fonctionner les requêtes sql
import { pgPool } from "../../config/pgPool.js";


// Le datamapper
export const oneCafe = async (id) =>{
        try {
            const {rows :  [cafe] } = await pgPool.query(`SELECT * FROM cafe WHERE id = $1`, [id])
            return cafe ?? null;
        } catch (error) {
            throw error;
        }
    };
```

Alternative
```js
// Importer client qui permet de faire fonctionner les requêtes sql
import client from '../database.js';

// Le dataMapper sous forme d'object / méthode
const dataMapper = {

    async getAllFigurines(){
        try {
            const { rows } = await client.query("SELECT figurine.*, ROUND(AVG(review.note)) AS moyenne FROM figurine INNER JOIN review ON review.figurine_id = figurine.id GROUP BY figurine.id");
            return rows;
        } catch (error) {
            throw error;
        }
    },
}
```

### Middleware d'erreur

se déclare plutôt dans l'index, après le middleware des routes


