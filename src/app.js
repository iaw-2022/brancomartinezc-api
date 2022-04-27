const express = require('express');
const citiesRoutes = require('./routes/cities.routes');
const propertiesRoutes = require('./routes/properties.routes');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('./swagger');
const swaggerDocs = swaggerJsDoc(swaggerOptions);

//app
const app = express();

//middlewares
app.use(express.json())

//routes
app.get('/', (req, res) => {
    res.json({
        message: 'api',
    })
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/cities', citiesRoutes);
app.use('/properties', propertiesRoutes);

module.exports = app;