# 📘 Tableaux vs Objets en JavaScript

## 🔸 Les bases

### ▶️ Tableau (Array)

```js
const fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // "apple"
```

- Accès par **index** (chiffre)
- L’**index commence à 0**
- Représente une **liste ordonnée**

### 📁 Objet (Object)

```js
const person = {
  name: "Alice",
  age: 25
};
console.log(person.name); // "Alice"
```

- Accès par **clé** (string)
- Représente des **données structurées sans ordre spécifique**

## 🔄 Combinations fréquentes

### 1️⃣ Objet contenant un tableau

```js
const person = {
  name: "Alice",
  hobbies: ["reading", "cycling"]
};
console.log(person.hobbies[1]); // "cycling"
```

### 2️⃣ Tableau contenant des objets

```js
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];
console.log(people[1].name); // "Bob"
```

## ⚡️ Combinations avancées

### 3️⃣ Tableau > Objet > Tableau

```js
const people = [
  {
    name: "Alice",
    friends: ["Bob", "Charlie"]
  },
  {
    name: "Dave",
    friends: ["Eve", "Frank"]
  }
];
console.log(people[0].friends[1]); // "Charlie"
```

### 4️⃣ Objet > Tableau > Objet

```js
const company = {
  departments: [
    { name: "HR", manager: { name: "Sophie", age: 40 } },
    { name: "IT", manager: { name: "Marc", age: 35 } }
  ]
};
console.log(company.departments[1].manager.name); // "Marc"
```

## ✅ Astuce de lecture

- Lire **de gauche à droite**
- Avancer étape par étape : `obj.prop1[index].prop2`

## 🗂 À retenir

- 📦 **Objet** : structure étiquetée, accès par clé
- 🔢 **Tableau** : structure ordonnée, accès par index
- 🔁 Peut être imbriqué autant que nécessaire

## 🧠 EXERCICE INTERACTIF

Voici une structure un peu plus complexe :

```js
const library = {
  name: "Central Library",
  shelves: [
    {
      category: "Science Fiction",
      books: [
        { title: "Dune", author: "Frank Herbert" },
        { title: "Neuromancer", author: "William Gibson" }
      ]
    },
    {
      category: "Fantasy",
      books: [
        { title: "The Hobbit", author: "J.R.R. Tolkien" },
        { title: "Harry Potter", author: "J.K. Rowling" }
      ]
    }
  ]
};
```

### 📌 Questions

1. Comment accéder au nom du **deuxième auteur** de la catégorie **Science Fiction** ?  
2. Comment accéder au **titre** du **premier livre** de la catégorie **Fantasy** ?
