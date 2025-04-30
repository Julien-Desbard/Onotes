# MCD

- Formalisation conceptuelle de la base de données

Entités :

- Chaque entite représente une table dans la base de données
- Si un élément est récurrent et doit être choisi dans un menu déroulant, alors il lui faut probablement une table dédiée (difficulté, tags pour des sujets...)
- Pour les données à mettre dans les tables, on pense aux infos essentielles au bon fonctionnement de la BDD (on ne pense pas aux clef primaires à cette étape)

Construction

- On créé une relation entre les tables en mettant un cardinalité (ex : 1,1; 1,n...), un verbe, une nouvelle cardinalité pour comprendre le lien entre les tables dans un sens et dans l'autre

Cardinalités : `https://www.base-de-donnees.com/cardinalites/`

## MLD

- Formalisation logique de la base de données
- Inclut le nom des champs effectifs, les clefs primaires et étrangères...
- les flèches entre les tables partent de la table qui contient un clef etrangère, vers la table dont provient cette clef etrangère
- règles : on doit retrouver au minimum dans un MLD le nom des tables, le nom des champs, les clefs (primaire) et les contraintes (clef étrangère, NOT NULL)
- une clef etrangère est identifiée via un #

Recap o'clock : `https://kourou.oclock.io/ressources/fiche-recap/mcd-modele-conceptuel-de-donnees/`

Cf. notes de cours du 15/04/25, S10 E02

### gestion des cardinalités

- Quand il y a un 1, la clef étrangère associée doit être NOT NULL
- Il faut créer en premier la table qui sera la source de clef étrangère pour une autre table sinon il y aura une erreur

Table intermédiaire :

- En cas de cardinalité n de chaque côté, il faut créer une table intermédiaire (cf quizz et tag dans l'exemple)
- si on crée une table intermédaire entre deux tables, afin de faire le lien, les deux clefs étrangères seront aussi des clefs primaires



