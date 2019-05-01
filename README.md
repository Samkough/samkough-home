# Samkough Home
Application for my house for everyone to see what to do and chat.

## Purpose
- Monitor house metrics (i.e. internet, how many users on network, etc.)
- Platform for everyone in the house to talk to one another
- FAQ for any questions

## Scripts
- npm run dev: "concurrently \"npm run server\" \"npm run client\""
    - Main script; runs both the server and client through an npm package called concurrently
- npm run start: "node app.js"
- npm run server: "nodemon server.js"
- npm run client: "npm start --prefix client"

## To-Do's
- :white_check_mark: Have backend working
- :white_check_mark: Implement React
- :white_check_mark: Have React and Node work together
- :pencil2: Create a login and registration system
- :x: Connect to Heroku
    - Need to have an external server (possibly look into phpMyAdmin if it can do this)