# 🚀 Git : Branches, Pull Requests, Git Pull & Conflits

---

## 🌿 1. Les Branches

Une **branche** est une version parallèle du projet. Elle permet de travailler sur une fonctionnalité sans impacter la version principale (souvent appelée `main` ou `master`).

> Exemple :  
> On veut ajouter une fonctionnalité de recherche ➜ on crée une branche `feature/recherche`

### 🛠 Créer une branche

```bash
git checkout -b feature/recherche
```

---

## 🔁 2. Pull Request (PR)

Une **pull request** (ou merge request) est une demande pour intégrer une branche dans une autre (souvent `main`). Elle permet :

- d’ouvrir une discussion autour du code
- de faire relire le code avant de fusionner
- d'assurer que tout fonctionne via des tests

> ⚠️ Les PR sont généralement utilisées avec des plateformes comme GitHub, GitLab, Bitbucket…

---

## 🔄 3. `git pull`

La commande `git pull` sert à **récupérer les dernières modifications distantes** et à les **fusionner automatiquement** dans la branche locale.

```bash
git pull origin main
```

Cela équivaut à :

```bash
git fetch
git merge origin/main
```

---

## ⚔️ 4. Conflits Git

Un **conflit** se produit lorsque deux personnes modifient **la même ligne dans un fichier** ou que des fichiers sont supprimés/modifiés en même temps, sur des branches différentes.

### Exemple de conflit

```text
<<<<<<< HEAD
console.log("Version A");
=======
console.log("Version B");
>>>>>>> feature/test
```

Il faut **choisir la bonne version** (ou fusionner les deux), puis :

```bash
git add <fichier_conflit>
git commit
```

---

# 🎯 Exemple concret : workflow complet

## Scénario : 2 devs veulent modifier `app.js`

### Étape 1 – Main de départ

```js
// app.js
console.log("Bienvenue sur l'application !");
```

### Étape 2 – Dev A crée une branche

```bash
git checkout -b feature/bonjour
```

Modifie `app.js` :

```js
console.log("Bonjour !");
```

Puis :

```bash
git add app.js
git commit -m "Ajout de Bonjour"
git push origin feature/bonjour
```

### Étape 3 – Dev B fait pareil

```bash
git checkout -b feature/hello
```

Modifie aussi `app.js` :

```js
console.log("Hello !");
```

Puis :

```bash
git add app.js
git commit -m "Ajout de Hello"
git push origin feature/hello
```

---

## Étape 4 – Fusion + Conflit

Si Dev A merge en premier, Dev B devra faire :

```bash
git checkout feature/hello
git pull origin main
```

🔴 Boom, conflit dans `app.js` !

```text
<<<<<<< HEAD
console.log("Hello !");
=======
console.log("Bonjour !");
>>>>>>> main
```

Dev B choisit quoi garder, corrige, puis :

```bash
git add app.js
git commit -m "Résolution de conflit"
```

---

## ✅ Étape 5 – PR finale vers main

Chaque dev ouvre une **pull request** pour intégrer sa branche dans `main`.

Une fois les conflits résolus, la PR peut être **fusionnée**.

---

# 📌 Résumé visuel

```
main
 └── feature/bonjour   ← Dev A
 └── feature/hello     ← Dev B (conflit)
       ↓ git pull + résolution
       ↓ PR → merge
```

---

# ✨ Bonnes pratiques

- Toujours faire `git pull` avant de commencer à coder
- Travailler sur des **petites branches**
- Ouvrir une PR rapidement pour discussion
- Résoudre les conflits **calmement** 🧘‍♂️

