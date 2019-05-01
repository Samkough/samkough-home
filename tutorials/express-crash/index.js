const express = require('express');
const path = require('path');
const members = require('./members');
const logger = require('./middleware/logger');

const app = express();

// Middleware
// app.use(logger);

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false }));

app.use(express.static(path.join(__dirname, 'public'))); // Set static folder

// Member API Routes
app.use('/api/members', require('./routes/api/members'));

// Listening to server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}.`));