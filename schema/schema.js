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
