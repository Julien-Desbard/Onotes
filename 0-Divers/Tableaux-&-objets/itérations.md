# 🔄 Itérations sur Tableaux et Objets en JavaScript

## 🟦 TABLEAUX

### ▶️ 1. Boucle `for`
```js
const fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```
🖨️ Résultat :
```
apple
banana
cherry
```

---

### ▶️ 2. Boucle `for...of`
```js
for (const fruit of fruits) {
  console.log(fruit);
}
```
🖨️ Résultat :
```
apple
banana
cherry
```

---

### ▶️ 3. Méthode `forEach()`
```js
fruits.forEach((fruit, index) => {
  console.log(index, fruit);
});
```
🖨️ Résultat :
```
0 apple
1 banana
2 cherry
```

---

### ▶️ 4. Méthode `map()` (transformation)
```js
const uppercased = fruits.map(fruit => fruit.toUpperCase());
console.log(uppercased);
```
🖨️ Résultat :
```
["APPLE", "BANANA", "CHERRY"]
```

---

## 🟨 OBJETS

### ▶️ 5. Boucle `for...in`
```js
const person = { name: "Alice", age: 25 };

for (const key in person) {
  console.log(key, person[key]);
}
```
🖨️ Résultat :
```
name Alice
age 25
```

---

### ▶️ 6. `Object.keys()` + `forEach()`
```js
Object.keys(person).forEach(key => {
  console.log(key, person[key]);
});
```
🖨️ Résultat :
```
name Alice
age 25
```

---

## 🧠 STRUCTURES IMBRIQUÉES

### ▶️ 7. Tableau d’objets contenant des tableaux
```js
const people = [
  { name: "Alice", hobbies: ["reading", "coding"] },
  { name: "Bob", hobbies: ["gaming", "cooking"] }
];

people.forEach(person => {
  console.log("Name:", person.name);
  person.hobbies.forEach(hobby => {
    console.log(" - Hobby:", hobby);
  });
});
```
🖨️ Résultat :
```
Name: Alice
 - Hobby: reading
 - Hobby: coding
Name: Bob
 - Hobby: gaming
 - Hobby: cooking
```

---

## 🧠 STRUCTURE NIVEAU AVANCÉ

### ▶️ Objet > Tableau > Objet > Tableau

```js
const school = {
  classes: [
    {
      name: "Class A",
      students: [
        { name: "Alice", grades: [15, 18, 17] },
        { name: "Bob", grades: [12, 14, 13] }
      ]
    },
    {
      name: "Class B",
      students: [
        { name: "Charlie", grades: [10, 11, 12] }
      ]
    }
  ]
};

school.classes.forEach(cls => {
  console.log("📚 Class:", cls.name);
  cls.students.forEach(student => {
    console.log(" 👤 Student:", student.name);
    student.grades.forEach((grade, i) => {
      console.log(`   📝 Grade ${i + 1}:`, grade);
    });
  });
});
```

🖨️ Résultat :
```
📚 Class: Class A
 👤 Student: Alice
   📝 Grade 1: 15
   📝 Grade 2: 18
   📝 Grade 3: 17
 👤 Student: Bob
   📝 Grade 1: 12
   📝 Grade 2: 14
   📝 Grade 3: 13
📚 Class: Class B
 👤 Student: Charlie
   📝 Grade 1: 10
   📝 Grade 2: 11
   📝 Grade 3: 12
```

---

## ✅ Résumé rapide

| Structure à parcourir      | Outils conseillés             |
|----------------------------|-------------------------------|
| Tableau simple             | `for`, `for...of`, `forEach` |
| Tableau d'objets           | idem + accès aux clés objets |
| Objet simple               | `for...in`, `Object.keys()`  |
| Objet avec tableau         | boucle sur clés, puis tableau |
| Structure complexe         | Boucles **imbriquées**       |

---

