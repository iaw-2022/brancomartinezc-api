const express = require('express');

//app
const app = express();

//routes
app.get('/', (req, res) => {
    res.json({
        message: 'api',
    })
});

module.exports = app;