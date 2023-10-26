const mysql = require('mysql2');
 
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Tommyeva2018!',
    database : 'RESTaurant_api',
    port : '3306',
});
module.exports = db
