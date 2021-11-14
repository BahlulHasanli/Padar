const { createPool } = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const connection = createPool({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = connection;
