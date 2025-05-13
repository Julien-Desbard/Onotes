# Qu’est-ce qu’un hash de mot de passe ?

Un **hash** de mot de passe est une version chiffrée (non réversible) d’un mot de passe. On l’utilise pour stocker des mots de passe de manière sécurisée en base de données.

Plutôt que de stocker le mot de passe en clair (ce qui serait une faille de sécurité), on stocke son **empreinte**. Ainsi, même si la base est compromise, les mots de passe ne sont pas directement exposés.

L'algorithme **Argon2** est actuellement l'un des plus recommandés pour ce type d'usage.

---
  
## Comment hasher un mot de passe avec npm et argon2

### 🔧 Installation

```bash
npm install argon2
```

### 🔐 Générer un hash

```js
const argon2 = require("argon2");

async function hashPassword(plainPassword) {
  try {
    const hash = await argon2.hash(plainPassword);
    console.log("Hash généré :", hash);
    return hash;
  } catch (err) {
    console.error("Erreur lors du hash :", err);
  }
}

hashPassword("monMotDePasse123");
```

### ✅ Vérifier un mot de passe

```js
async function verifyPassword(hash, plainPassword) {
  try {
    const isValid = await argon2.verify(hash, plainPassword);
    if (isValid) {
      console.log("Mot de passe valide !");
    } else {
      console.log("Mot de passe invalide.");
    }
  } catch (err) {
    console.error("Erreur lors de la vérification :", err);
  }
}
```
