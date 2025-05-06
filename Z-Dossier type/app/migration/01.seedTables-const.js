import { List, Card, Tag, sequelize } from "./../models/associations.js";

console.log("🌱 Seeding des tables");

// Creer des listes
console.log("🚧 Ajout de listes de test");
const list1 = await List.create({ title: "Liste de course"});
const list2 = await List.create({ title: "Tâches ménagères" });
const list3 = await List.create({ title: "Projets personnels" });

// Creer des cartes
console.log("🚧 Ajout de cartes de test");
const card1 = await Card.create({ content: "Savon", color: "#FF0000", list_id: list1.id });
const card2 = await Card.create({ content: "Shampoing", color: "#00FF00", list_id: list1.id });
const card3 = await Card.create({ content: "Éponges", color: "#0000FF", list_id: list1.id });

const card4 = await Card.create({ content: "Passer l'aspirateur", color: "#FFA500", list_id: list2.id });
const card5 = await Card.create({ content: "Faire la vaisselle", color: "#800080", list_id: list2.id });
const card6 = await Card.create({ content: "Sortir les poubelles", color: "#008080", list_id: list2.id });

const card7 = await Card.create({ content: "Lire un livre", color: "#FFC0CB", list_id: list3.id });
const card8 = await Card.create({ content: "Coder une application", color: "#A52A2A", list_id: list3.id });
const card9 = await Card.create({ content: "Faire du sport", color: "#000000", list_id: list3.id });
const card10 = await Card.create({ content: "Dessiner", color: "#FFD700", list_id: list3.id });

// Creer des labels
console.log("🚧 Ajout de labels de test");
const tag1 = await Tag.create({ name: "urgent", color: "#FF0000" });
const tag2 = await Tag.create({ name: "à faire", color: "#FFA500" });
const tag3 = await Tag.create({ name: "en cours", color: "#0000FF" });
const tag4 = await Tag.create({ name: "terminé", color: "#008000" });
const tag5 = await Tag.create({ name: "personnel", color: "#800080" });
const tag6 = await Tag.create({ name: "travail", color: "#00CED1" });


// associer des labels aux tags
console.log("🚧 Associer tags et cartes");
await card1.addTag(tag1); // Savon - urgent
await card2.addTag(tag2); // Shampoing - à faire
await card3.addTag(tag3); // Éponges - en cours

await card4.addTags([tag1, tag4]); // Passer l'aspirateur - urgent - terminé

await card5.addTag(tag2); // Faire la vaisselle - à faire
await card5.addTag(tag6); // Faire la vaisselle - travail

await card6.addTag(tag3); // Sortir les poubelles - en cours

await card7.addTag(tag5); // Lire un livre - personnel

await card8.addTag(tag6); // Coder une application - travail
await card8.addTag(tag3); // Coder une application - en cours

await card9.addTag(tag5); // Faire du sport - personnel
await card9.addTag(tag2); // Faire du sport - à faire

await card10.addTag(tag5); // Dessiner - personnel
await card10.addTag(tag4); // Dessiner - terminé


sequelize.close();
console.log("✅ Données inserées");