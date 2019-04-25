const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end("<h1>Homepage</h1>")
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}.`));

/*const Person = require('./person');
const person1 = new Person('John Doe', 30);

console.log(person1);*/