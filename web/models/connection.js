const mysql = require('mysql2');
const dbConfig = require("../config/configDB");

var connection = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   database: 'test',
//   waitForConnections: true,
//   connectionLimit: 10,
//   maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
//   idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
//   queueLimit: 0,
//   enableKeepAlive: true,
//   keepAliveInitialDelay: 0
// });

module.exports = connection;