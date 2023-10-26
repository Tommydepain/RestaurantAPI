const mysql = require('mysql');
 
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Toms2018',
    database : 'RESTaurant_api',
    port : '3306',
});
module.exports = db
