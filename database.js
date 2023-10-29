const mysql = require('mysql2')

module.exports = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'Jczhang',
    password: 'BISZ2024',
    database: 'jczhang',
})
