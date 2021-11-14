# Padar Db Table Builder

<p align="center">
  <img src="https://user-images.githubusercontent.com/15572553/120489300-94aa5b00-c3c8-11eb-90d3-7ed2cc51bf91.png">
</p>

Small and very useful mysql database table generator

## Getting started

```cli
npm i -g
```

continue later

```cli
npm i
```

## How do I use it?

```javascript
// connection.js

const { createPool } = require('mysql2');

const connection = createPool({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = connection;
```

```javascript
// schema.js

const types = require('../utils/types.js');

const { autoincrement, varchar, int, notnull } = types;

const schema = [
  {
    tableName: 'customers',
    primary_key: ['CUSTOMER', 'id, customerFullName'],
    exists: true,
    columns: [
      { row: 'id', type: autoincrement(), void: notnull() },
      { row: 'customerFullName', type: varchar(250) },
      { row: 'customerEmail', type: varchar(255), void: notnull() },
    ],
  },
  {
    tableName: 'users',
    exists: false,
    primary_key: ['USERS', 'id'],
    columns: [
      { row: 'id', type: autoincrement(), void: notnull() },
      { row: 'userFullName', type: varchar(250) },
      { row: 'userEmail', type: varchar(255), void: notnull() },
      { row: 'password', type: int(20), void: notnull() },
      { row: 'phone', type: int(20) },
    ],
  },
  {
    tableName: 'personals',
    exists: false,
    primary_key: ['PERSONALS', 'id'],
    columns: [
      { row: 'id', type: autoincrement(), void: notnull() },
      { row: 'personalName', type: varchar(100) },
      { row: 'personalEmail', type: varchar(150), void: notnull() },
      { row: 'password', type: int(10), void: notnull() },
      { row: 'phone', type: int(10) },
    ],
  },
];

module.exports = schema;
```

Then you just have to start Padar

```cli
padar create
```
