const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'your_actual_mysql_username',   // e.g., 'root'
    password: 'your_actual_mysql_password', // e.g., 'password123'
    database: 'project_nexus'              // make sure this DB exists
});

module.exports = db;
