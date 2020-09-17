if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const mysql = require('mysql');


const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME

});

conn.connect((err) => {

    if (err)
        console.log('DB connection failed.\n Error: ' + JSON.stringify(err, undefined, 2));
    });

module.exports = conn