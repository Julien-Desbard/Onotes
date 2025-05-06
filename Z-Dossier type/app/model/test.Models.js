import { List } from "../associations.js"
import {Card} from "../associations.js"
import {Tag} from "../associations.js"

//const lists = await List.findAll();

// console.log(lists);
// histoire d'avoir un affichage plus lisible en console, l'important est l'argument lists pour savoir ce qu'on veut Parser (fonction stringify())
//console.log(JSON.stringify(lists, null, 2)); 


// après avoir déclaré les associations, je vérifie que le lien entre les tables est fonctionnel via un include
const lists = await List.findAll({
    include: "cards",
  });
  console.log(JSON.stringify(lists, null, 2));

  // test de création d'une carte
const carte1 = await Card.create({
  content: "Ma nouvelle carte",
  list_id: 1,
});

console.log(carte1);

// bonne rpatique : trester un maximum de chose à ce moment pour identifier tout problème