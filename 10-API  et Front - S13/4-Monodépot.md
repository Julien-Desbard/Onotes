# Créer un monodépôtà partir de deux dépôts séparés (API et Front)

Voir le fichier monodépôt `S13-okanban-monorepo-Julien-Desbard`

- Créer une copie du dossier front
- Coller le dossier back dans le dossier front
- Renommer le dossier back => client
- Installer vite dans le dossier client
  - ajouter le script suivant dans le package.json du client :
 `  "scripts": {"dev": "vite", "build": "vite build","preview": "vite preview" },` 
  - le script build permettra de créer le contenu du dossier dist contenant l'API  
- supprimer les infos git si les dossiers étaient des dépôt git auparavant : 
  - rm -rf .git dans le dossier global
  - rm -rf .git dans le dossier client
  - git stauts => not a git repository
- ajouter `"postinstall": "npm install --prefix client"` dans package.json à la racine (pas le dossier client) ==> permettra d'installer toutes les dépendances y compris celles du dossier client