const express = require('express');
const app = express();

// Define a simple route to test if the app is working
app.get('/testNode', (_req, res) => {
    res.status(200).send('Yes, the testNode endpoint worked'); // Fixed the response message
});

module.exports = app; // Export the Express app for use in index.js
