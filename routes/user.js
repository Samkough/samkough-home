const express = require("express")
const mysql = require("mysql")
const router = express.Router()

router.get('/messages', (req, res) => {
    console.log("Show some messages...")
    res.end()
})

router.get("/users", (req, res) => {
    const queryString = "SELECT * FROM users"
    getConnection().query(queryString, (err, rows, fields) => {
        if (err) {
            console.log("Failed: " + err)
            res.sendStatus(500)
            return
        }

        console.log("fetch successful")
        res.json(rows)
    })
})

router.post('/user_create', (req, res) => {
    console.log("Creating a new user:")

    console.log("First name: " + req.body.fName)
    const fName = req.body.fName;
    const lName = req.body.lName;
    
    const queryString = "INSERT INTO users (fName, lName) VALUES (?, ?)";
    getConnection().query(queryString, [fName, lName], (err, results, fields) => {
        if (err) {
            console.log("Failed to insert new user: " + err)
            res.sendStatus(500)
            return
        }

        console.log("Inserted a new user with id: " + results.insertedId)
        res.redirect('./users')
    })
})

router.get('/user/:id', (req, res) => {
    console.log("Fetch user with id: " + req.params.id)

    const queryString = "SELECT * FROM users WHERE id=?"
    getConnection().query(queryString, [req.params.id], (err, rows, fields) => {
        if (err) {
            console.log("Failed: " + err)
            res.sendStatus(500)
            return
        }

        console.log("fetch successful")
        res.json(rows)
    })
})

const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    database: "dsoft"
})

function getConnection() {
    return pool
}

module.exports = router