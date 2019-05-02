const express = require("express")
const morgan = require("morgan")
const mysql = require("mysql")
const bodyParser = require("body-parser")

const app = express()
const userRouter = require('./routes/user.js')
const PORT = process.env.PORT || 5000;

let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*")
    res.header('Access-Control-Allow-Headers', "*")
    next();
  }
  app.use(allowCrossDomain);

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('./public'))
app.use(morgan('short'))

// routes
app.use(userRouter)

app.get("/", (req, res) => {
    console.log("Root Page")
    res.json([
        {id: 1, username: "Josh"},
        {id: 2, username: "Bob"}
    ])
})

app.listen(PORT, () => {
    console.log("Listening on port " + PORT + "!")
})