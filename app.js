const express = require("express")
const morgan = require("morgan")
const mysql = require("mysql")
const bodyParser = require("body-parser");

const app = express()
const userRouter = require('./routes/user.js')
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('./public'))
app.use(morgan('short'))

// routes
app.use(userRouter)

app.get("/", (req, res) => {
    console.log("Hi this is the root page.")
    res.send("Hi this is the root page.")
})

app.listen(PORT, () => {
    console.log("Listening on port " + PORT + "!")
})