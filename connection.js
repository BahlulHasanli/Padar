const { createPool } = require('mysql2');

const connection = createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dbbuilder',
});

module.exports = connection;
