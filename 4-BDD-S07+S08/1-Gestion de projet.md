# E01 gestion de projet

## Analyse

Quand un client toque à notre porte il a souvent une idée très vague, et la part très importante du métier de développeur c'est de transformer cette idée en projet concret et réalisable.

## Clarification

### Les users stories

Les user stories servent  à définir dans une application qui fait quoi et d'avoir une liste exaustive des fonctionnalités qu'il y aura dans l'application par exemple :

`En tant que visiteur je peux consulter la liste des promos`

### use cases

Selon la méthodo de projet de la boite il est possible de faire des diragrammes plutôt que des users stories textuelles et c'est le diagramme UML de use cases qui faira office de users stories

### Wireframes

C'est représentation du placement des éléments d'une page, sans notion de couleurs, de photos ou de charte graphique. Cela permet de visualiser si de manière fonctionnelle le besoin et l'attendu est bien compris. On partira de cette base pour faire les maquettes
[exemple](https://www.sooyoos.com/app/uploads/2021/03/pasted-image-0-1280x882.png)

### Cahier des charges

Plus tard ces documents serviront à l'établissement d'un cahier des charges, plus ce cahier des charges est précis et détaillé et moins de surprise il y aura pour tout le monde.

## Mise en place d'un projet neuf

- mettre en place le repo git
- `npm init -y`
- mettre le .gitignore
- mettre le script de dev danc package.json
- mettre type module dans le package.json
- mettre en place l'architecture du projet
- `npm install ejs express`
- mettre en place le code de base du server
- setter ejs comme moteur de template
- setter le dossier public comme dossier statique
- setter le dossier de views
- afficher la homepage à l'aide d'un router et d'un controller

## Methodo nouvelle page

Nous sommes actuellements dans une architecture MVC donc la méthodo pour créer une page sera tout le temps la même

- Pour une nouvelle route de type /promos

- Je vais créer un promosController si je n'en ai pas.

- Dans ce contrôleur, je vais créer la fonction pour la route en question.

- La fonction récupère les données et rend la vue avec ses variables.

- Je crée un dossier dans les vues pour le nouveau type de route si ce n'est pas déjà fait, par exemple ici un dossier promos.

- Je crée la nouvelle vue (fichier ejs).

- Je crée la nouvelle route dans mon router et j'appelle le bon contrôleur et la bonne méthode.

# E02 - SQL

##  les commandes | Basics

- 1 - Pour se connecter à postgresql via le terminal : `psql -U postgres` mot de passe : (js4life)
- Pour créer un nouvel utilisateur : `CREATE USER nom_utilisateur WITH LOGIN PASSWORD 'mot_de_passe';`;
- Pour voir la liste des users postgres `\du`
- Pour donner les droits admin à un user sur tous le serveur : `ALTER USER name WITH SUPERUSER;`;
- Pour créer une BDD et donner les droits à un user spécifique : `CREATE DATABASE nom_db OWNER nom_user;`
- Pour lister les bdd : `\l;`
- 2 - Pour se connecter à une bdd : `\c nom_db;`
- Pour importer un script : `\i /chemin/vers/fichier.sql;`

*Si vous perdez la connexion il faut refaire l'étape 01 et 02*

## SELECTION | Basics

Récupérer tous les elements d'une table :

```sql
SELECT * FROM students;
```

Récupérer un élément spécifique :

```sql
SELECT code_postal FROM city;
```

Récupérer plusieurs éléments spécifiques:

```sql
SELECT last_name, first_name FROM students;
```

## SELECTION | WHERE

Pour faire une recherche sur une condition spécifique

```sql
SELECT * FROM promos where name = 'tiramisu';
```

## SELECTION | condition

Comme pour les langages de programmations il est possible de rendre nos conditions plus précises ou plus large avec "AND" "OR"

```sql
SELECT * FROM promos where name = 'tiramisu' OR name = "Papaye";
```

```sql
SELECT * FROM promos where name = 'tiramisu' AND id = 555;
```

## SELECTION | LIKE

L’opérateur LIKE est utilisé dans la clause WHERE des requêtes SQL. Ce mot-clé permet d’effectuer une recherche sur un modèle particulier. Il est par exemple possible de rechercher les enregistrements dont la valeur d’une colonne commence par telle ou telle lettre. Les modèles de recherches sont multiple.
**Une variant de LIKE existe, c'est ILIKE pour rendre la recherche insenssible à la casse**

```sql
SELECT * FROM promos WHERE name LIKE 'P%';
```

# E03 - async await promise

## Callback Hell et ses inconvénients

Le **callback hell** (ou "pyramide de la mort") est un problème courant en JavaScript lorsque l'on imbrique plusieurs callbacks successifs. Cela arrive souvent dans les opérations asynchrones comme les requêtes réseau ou les accès aux bases de données. Plus on imbrique de fonctions, plus le code devient difficile à lire, comprendre et maintenir. De plus, la gestion des erreurs devient complexe car chaque callback doit traiter ses propres erreurs, ce qui peut rendre le débug fastidieux. Exemple typique de callback hell :

```javascript
getData(function(result) {
    processData(result, function(processedData) {
        saveData(processedData, function(response) {
            console.log("Données sauvegardées !");
        });
    });
});
```

Ce type de code devient vite illisible et difficile à gérer.

# Les Promises et leur fonctionnement

Les **Promises** sont une alternative moderne aux callbacks pour gérer l'asynchronisme en JavaScript. Elles représentent une opération qui peut être **en attente (pending)**, **résolue (fulfilled)** ou **rejetée (rejected)**. Une Promise permet d'enchaîner les opérations avec `.then()` et de centraliser la gestion des erreurs avec `.catch()`, rendant le code plus clair et lisible. Exemple :

```javascript
getData()
    .then(result => processData(result))
    .then(processedData => saveData(processedData))
    .then(() => console.log("Données sauvegardées !"))
    .catch(error => console.error("Erreur :", error));
```

Avec les Promises, le code est plus linéaire et évite l'imbrication excessive.
Elles sont également la base de `async/await`, qui permet encore plus de clarté et de simplicité.

lien de la doc : [lien](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise)

# E04

## DataMappers

Article qui en parle plutôt bien : [lien](https://4markdown.com/understanding-repository-pattern-in-nodejs-and-typescript/)

## Syntaxe ES récentes

- Opérateur de coalescence pour renvoyer une valeur quand l'opérande de gauche est null ou undefined : [lien](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)

- opérateur ternaire, pour raccourcir un simple if else : [lien](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

- destructuring d'objet, ça permet de décomposer les propriétés d'un objet et de sortir les valeurs dans des variables disponible dans le code courant [lien](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Destructuring)
  - destructuring de tableau, permet d'extraire les valeurs du tableau dans des variables externe en une seul ligne
