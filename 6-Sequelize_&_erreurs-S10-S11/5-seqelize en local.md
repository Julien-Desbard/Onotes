# Mini bdd en local

Avec cette forme de bdd, pas besoin de créer un bdd ni des tables

```js
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: ":memory:",
  logging: false,
});

module.exports = sequelize;
```