# E01 - gestion de projet et mise en place

# Menu du jour
- Gestion de projet
  - mettre en place un kanban
  - Analyse de la demande
  - Clarification, question
  - user stories, CDC, spécifications fonctionnelles
  - wireframes, maquettes
  - Choix de technos
- Conception BDD / modélisation
  - MCD
  - MLD
  - MPD
- Code / réalisation
  - Créer la structure de projet
  - Intégration -> html / css

## wireframes figma

Dans l'odre en général nous allons réaliser le design de cette manière là : 
Comme un entonoire les designs vont être réaliser du plus large au plus précis, les maquettes seront la représentation exacte du site une fois réalisé.

article de blog sur le sujet : [lien](https://blog-ux.com/quelle-est-la-difference-entre-le-zoning-wireframe-mockup-et-prototype/)

- zoning 
  - c'est le découpage par zone de la page, de la manière la plus simple possible
  - aucune contrainte fonctionnelle et graphique
- wireframe 
  - C'est ce qu'on peut appeler la maquette fonctionnelle, c'est le positionnement des éléments.
  - En général en noir et blanc
  - aucune notion de design si ce n'est le positionnement, les blocks, les sections, les zones de textes
  - aucune contrainte graphique
- maquette / prototype 
  - représentation exacte de l'attendu visuel
  - les contraintes fonctionnelles, graphiques / visuels sont appliqués

### Les notions les plus importantes dans figma :

- auto-layout : [lien](https://academy.dekolage.fr/auto-layout-creer-un-design-dynamique-sur-figma)
- composant : [lien](https://help.figma.com/hc/fr/articles/360038662654-Guide-des-Composants-dans-Figma)

## MCD

Le MCD a pour but de faire visualiser la structure de la base de données de manière conceptuel afin de la faire valider au client elle comprends : 

- les noms des entités à faire persister
- les propriétés 
- les relations entre elles
- la notion de cardinalité

# MLD 

Le MLD est la transformation technique du MCD en base de données on aura donc : 
- les entités seront des tables (écritent en anglais)
- les notions de clés primaires
- les notions de clés étrangères
- les contraintes

# MPD

C'est à l'exactitude le MLD mais avec les contraintes liés au SGBD spécifique que vous utilisez