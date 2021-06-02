# Padar Db Table Builder

<p align="center">
  <img src="https://user-images.githubusercontent.com/15572553/120489300-94aa5b00-c3c8-11eb-90d3-7ed2cc51bf91.png">
</p>

Small and very useful mysql database table generator

## Getting started

```cli
npm i or yarn
```

## How do I use it?


```javascript 

// connection.js

const { createPool } = require('mysql2');

const connection = createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dbbuilder',
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
    primary_key: ['PK_Customer', 'id, customerFullName'],
    exists: true, 
    columns: [
      { row: 'id', type: autoincrement(), void: notnull() }, // don't specify void if not will not be null
      { row: 'customerFullName', type: varchar(250) },
      { row: 'customerEmail', type: varchar(255), void: notnull() },
    ],
  },
  {
    tableName: 'users',
    exists: false, // if you don't want to add the old table to the table with the same name
    primary_key: ['PK_User', 'id'],
    columns: [
      { row: 'id', type: autoincrement(), void: notnull() },
      { row: 'userFullName', type: varchar(250) },
      { row: 'userEmail', type: varchar(255), void: notnull() },
      { row: 'password', type: int(20), void: notnull() },
      { row: 'phone', type: int(20) },
    ],
  },
];

module.exports = schema;

```

Then you just have to start Padar

```cli 
padar create
```
