const { Client } = require('pg');

// Database connection configuration
const dbConfig = {
  user: 'postgres',
  password: '1234',
  host: 'localhost',
  port: '5433',
  database: 'smartandclean',
};

// Create a new PostgreSQL client
const client = new Client(dbConfig);

module.exports = client