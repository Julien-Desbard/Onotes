import { sequelize } from "../associations.js";
import { Tag } from "../associations.js"
import { List } from "../associations.js"
import { Card } from "../associations.js"

// Création des tags
const [enfants, vegetarien, avance] = await Tag.bulkCreate([
    { name: 'Pour les enfants', color: '#FFD700' },
    { name: 'Plat végétarien', color: '#32CD32' },
    { name: 'À préparer en avance', color: '#1E90FF' },
  ], { returning: true });
  
  // Création des listes avec cartes imbriquées
  const listes = await List.bulkCreate([
    {
      title: 'Ingrédients à acheter',
      position: 1,
      cards: [
        { content: 'Acheter des tomates', position: 1 },
        { content: 'Acheter du fromage râpé', position: 2 },
        { content: 'Acheter des pâtes', position: 3 }
      ]
    },
    {
      title: 'Préparation en cours',
      position: 2,
      cards: [
        { content: 'Faire revenir les oignons', position: 1 },
        { content: 'Préparer la sauce béchamel', position: 2 }
      ]
    },
    {
      title: 'Plats terminés',
      position: 3,
      cards: [
        { content: 'Lasagnes maison', position: 1 },
        { content: 'Purée de carottes', position: 2 }
      ]
    }
  ], {
    include: [{ model: Card, as: 'cards' }]
  });
  
  // Récupération de toutes les cartes pour les lier aux tags
  const allCards = await Card.findAll();
  
  // Association tags ↔ cartes
  await allCards[0].addTags([vegetarien]);               // tomates
  await allCards[1].addTags([enfants]);                  // fromage
  await allCards[2].addTags([vegetarien, avance]);       // pâtes
  
  await allCards[3].addTags([avance]);                   // oignons
  await allCards[4].addTags([vegetarien]);               // béchamel
  
  await allCards[5].addTags([enfants, avance]);          // lasagnes
  await allCards[6].addTags([enfants]);                  // purée
  