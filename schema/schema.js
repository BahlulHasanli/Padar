const types = require('../utils/types.js');

const { autoincrement, varchar, int, notnull } = types;

const schema = [
  {
    tableName: 'customers',
    primary_key: ['PK_Customer', 'id, customerFullName'],
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
