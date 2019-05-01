const express = require("express")
const app = express()
const morgan = require("morgan")
const mysql = require("mysql")
const bodyParser = require("body-parser");
const router = require('./routes/user.js')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('./public'))
app.use(morgan('short'))
app.use(router)

app.get("/", (req, res) => {
    console.log("response")
    res.send("test")
})

app.listen(3000, () => {
    console.log("server is running on 3000")
})