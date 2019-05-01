const path = require('path');

console.log("Original File: " + __filename);

/* methods */
// Base file Name
console.log("Base File Name: " + path.basename(__filename));

// Directory name
console.log("Directory Name: " + path.dirname(__filename));

// File extension
console.log("File Extension: " + path.extname(__filename));

// Create path object
console.log("Path Object: " + path.parse(__filename).base);

// Concatenate paths (../test/hello.html)
console.log(path.join(__dirname, 'test', 'hello.html'));