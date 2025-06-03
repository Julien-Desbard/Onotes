#  Les commandes | Basics

- Pour se connecter à postgresql via le terminal : `psql -U postgres` mot de passe : (js4life)
- Pour créer un nouvel utilisateur : `CREATE USER coincoin WITH LOGIN PASSWORD 'admin';`; ==> julien / Faitchier
- Pour voir la liste des users postgres `\du`
- Pour donner les droits admin à un user sur tous le serveur : `ALTER USER name WITH SUPERUSER;`;
- Pour créer une BDD et donner les droits à un user spécifique :  `CREATE DATABASE coincoin OWNER coincoin;`
- Pour lister les bdd : `\l`
- Poyur lister les tables `\d`
- POur voir les colonnes et contraintes d'une table : `\d nom_de_la_table`
- Pour se connecter à une bdd : `\c nom_de_la_table;`
- Pour importer un script : `\i /chemin/vers/fichier.sql`
- Forcer la suppression d'une table : `DROP TABLE IF EXISTS nom_de_la_table CASCADE;`

## Copier / coller

CREATE USER chatbot WITH LOGIN PASSWORD 'admin';
CREATE DATABASE chatbot OWNER chatbot;
\c chatbot;


### Recap O'CLock

#### Que faire pour commencer un projet.

Création d’un utilisateur et d’une base de données
Se connecter au Système (OS) avec l’utilisateur postgres
sudo -i -u postgres (ou sudo su postgres sur MacOsX)

=> on récupère une invite de commande du type postgres@nomDeLaMachine~$

Se connecter au server PostGres dans le terminal
Une fois connecté au système en tant que postgres, on tape : psql

Comme postgres est le « super-utilisateur » du serveur postGreSQL, on va pouvoir tout faire !

=> on a une invite de commande PostGres : `postgres=#`

Se connecter au server PostGres dans le terminal en une seule commande
📋 `sudo -i -u postgres psql`

va exécuter le logiciel psql en mode super-utilisateur directement.

petit résumé des commandes postgreSQL « de base »
\l pour lister les base de données
\du pour lister les utilisateur (ou « roles ») existants
\dt pour lister les tables de la base de données courante
\c nombdd pour se connecter à une base de donnée en particulier
Créer un utilisateur
CREATE ROLE nomDeLutilisateur;

ou, avec un peu plus de détails :

CREATE ROLE nomDueLutilisateur WITH <une liste de droits>;

Quelques droits possibles
LOGIN : donne le droit à l’utilisateur de se connecter
PASSWORD 'leMotDePasse' : donne un mot de passe à l’utilisateur.
📋 CREATE ROLE nomDeLutilisateur WITH LOGIN PASSWORD 'leMotDePasse';

Modifier un utilisateur existant
ALTER ROLE nomDeLutilisateur WITH <une liste de droits>;

Créer une base de données
CREATE DATABASE nomDeLaBase OWNER nomDeLutilisateur;

on crée une base de données, et on déclare l’utilisateur comme « propriétaire » (donc il a tous les droits) de cette base !

Se connecter à la base de données nouvellement créée, avec l’utilisateur nouvellement créé
📋 Dans un nouveau terminal : psql -U nomDeLutilisateur -d nomDeLaBase

Note: par défaut, si on ne met pas -d nomDeLaBase, on se connecte automatiquement à la base de données qui porte le même nom que l’utilisateur.

Executer les instructions SQL contenues dans un fichier
On aura souvent, dans les projets, un fichier SQL destiné à mettre en place la première version de la base de données. Ces fichiers ne contiennent pas la donnée directement, mais bien les instructions pour créer les tables et y injecter les données.

📋 psql -U nomDeLutilisateur -d nomDeLaBase -f chemin/du/fichier.sql

Configuration des accès (pas besoin sur la vm)
Cette manip est à faire une seule fois. Si vous l’avez déjà faite ou sur la VM, ce n’est pas la peine de le faire !

Par défaut dans PostGres, les utilisateurs systèmes n’ont pas le droit de se connecter avec login différent de leur nom. (oui c’est pas simple comme phrase, et oui c’est bizarre comme réglage…)

Ce qui veut dire que si je m’appelle « Worker », je peux me connecter à postgreSQL UNIQUEMENT en tant que « Worker », même si je suis super-utilisateur, et que j’ai tout les droits…

Pour pallier ça, il faut modifier le fichier /etc/postgresql/X/main/pg_hba.conf. (Remplacez X par la version de PostGreSQL installée) Changer la ligne :

local all all peer

en :

local all all md5

Il vous faudra les droits super-user pour modifier ce fichier.

Avec Nano
sudo nano /etc/postgresql/X/main/pg_hba.conf

Puis modifier la ligne à modifier.

Puis Ctrl + O pour sauvegarder.

Enfin, Ctrl + X pour quitter.

Relancer le serveur PostGres
Pour que les changements soient pris en compte, il faut relancer le serveur :

sudo service postgresql restart

