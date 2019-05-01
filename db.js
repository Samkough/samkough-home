// use this file in user.js
const mysql = require("require")

const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    database: "dsoft"
})

function getConnection() {
    return pool
}