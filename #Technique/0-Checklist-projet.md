# CHECKLIST STRUCTURE FULLSTACK (Node.js + Express + Sequelize + Zod + Vite)

## 1. Structure de base du projet

Créer l’arborescence suivante :

mon-projet/
│
├── backend/         # API Express
└── frontend/        # App JS avec Vite

## 2. Initialiser le backend

- Se placer dans le dossier `backend`
- Lancer : `npm init -y`

## 3. Installer les dépendances backend

npm install express sequelize pg pg-hstore dotenv zod cors multer swagger-jsdoc swagger-ui-express

| Dépendance           | Rôle                                                            |
|----------------------|------------------------------------------------------------------|
| express              | Créer le serveur HTTP (API)                                      |
| sequelize            | ORM pour manipuler la BDD via des objets                         |
| pg / pg-hstore       | Connecteurs PostgreSQL pour Sequelize                           |
| dotenv               | Charger les variables d’environnement                           |
| zod                  | Valider les données côté backend                                |
| cors                 | Autoriser les appels frontend/backend                            |
| multer               | Gérer les `multipart/form-data` (formulaires)                   |
| swagger-jsdoc        | Générer la doc Swagger depuis les commentaires JSDoc            |
| swagger-ui-express   | Afficher la doc Swagger via un navigateur                       |

---

## 4. Créer la structure de dossiers/fichiers backend

backend/
├── app.js
├── index.js
├── .env
│
├── config/
│   └── database.js
│
├── models/
│   └── User.js
│
├── controllers/
│   └── userController.js
│
├── routes/
│   ├── index.js
│   └── userRoutes.js
│
├── middlewares/
│   └── validate.js
│
└── validators/
    └── userValidator.js

---

## 5. Variables d’environnement (.env)

```js
PORT=3000
DATABASE_URL=postgres://user:password@localhost:5432/ma_base
```

---

## 6. Middlewares à utiliser dans app.js

```js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(multer().none());
```

---

## 8. Middleware 404 (route non trouvée)

```js
app.use((req, res) => {
  console.log("🛑 Middleware 404 :", req.method, req.url);
  res.status(404).json({ error: "Route non trouvée" });
});
```

---

## 9. Middleware global de gestion des erreurs

```js
app.use((err, req, res, next) => {
  console.error("Erreur capturée :", err);
  if (err.name === "ZodError") {
    return res.status(400).json({ error: "Erreur de validation", details: err.errors });
  }
  res.status(500).json({ error: "Erreur interne", details: err.message });
});
```

---

## 10. Lancer le backend

```js
node index.js
```

---

## 11. Initialiser le frontend avec Vite

- Se placer dans `mon-projet`
- Lancer : `npm create vite@latest`
- Choisir "vanilla"
- Aller dans le dossier frontend :

npm install
npm run dev

---

## 12. Organisation du frontend

frontend/
├── index.html
└── main.js

- Utiliser `fetch()` dans `main.js` pour appeler les routes de l’API backend.
