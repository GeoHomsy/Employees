const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  password:'admin',
  host: 'localhost',
  database: 'Employees',
  port: 5432
});

pool.connect();
module.exports = pool;