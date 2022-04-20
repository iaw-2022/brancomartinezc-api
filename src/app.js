const express = require('express');
const citiesRoutes = require('./routes/cities.routes');
const propertiesRoutes = require('./routes/properties.routes');

//app
const app = express();

//routes
app.get('/', (req, res) => {
    res.json({
        message: 'api',
    })
});

app.use('/cities', citiesRoutes);
app.use('properties', propertiesRoutes);

module.exports = app;