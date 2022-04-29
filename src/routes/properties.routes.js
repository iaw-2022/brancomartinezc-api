const express = require('express');
const router = express.Router();
const propertiesCtrl = require('../controllers/properties.controller');

/**
 * @swagger
 * /properties:
 *   get:
 *     description: Use to request properties.
 *     parameters:
 *       - in: body
 *         type: object
 *         name: body
 *         required: true
 *         properties:
 *           type:
 *             type: string
 *           sale_rent:
 *             type: string
 *           city_id:
 *             type: integer
 *           min_area:
 *             type: integer
 *           max_area:
 *             type: integer
 *           min_price:
 *             type: integer
 *           max_price:
 *             type: integer
 *           min_beds:
 *             type: integer
 *           max_beds:
 *             type: integer
 *           min_rooms:
 *             type: integer
 *           max_rooms:
 *             type: integer
 *           min_baths:
 *             type: integer
 *     tags: 
 *       - Properties
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid json parameters
 *       '404':
 *         description: Not found
 */
router.get('/', propertiesCtrl.getProperties);

/**
 * @swagger
 * /properties/{id}:
 *   get:
 *     description: Use to request a property.
 *     tags: 
 *       - Properties
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the property
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid parameter
 *       '404':
 *         description: Not found
 */
router.get('/:id', propertiesCtrl.getPropertyById);

/**
 * @swagger
 * /properties/city/{id}:
 *   get:
 *     description: Use to request all properties of a city.
 *     tags: 
 *       - Properties
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the city
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid parameter
 *       '404':
 *         description: Not found
 */
router.get('/city/:id', propertiesCtrl.getPropertiesByCity);

/**
 * @swagger
 * /properties/country/{country_code}:
 *   get:
 *     description: Use to request all properties of a country.
 *     tags: 
 *       - Properties
 *     parameters:
 *       - in: path
 *         name: country_code
 *         schema:
 *           type: string
 *         required: true
 *         description: ISO 3166 Alpha-2 code of the country (e.g. AR, US, etc) https://www.iban.com/country-codes
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid parameter
 *       '404':
 *         description: Not found
 */
router.get('/country/:id', propertiesCtrl.getPropertiesByCountry);

/**
 * @swagger
 * /properties/photos/{id}:
 *   get:
 *     description: Use to request all photos of a property.
 *     tags: 
 *       - Properties
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the property
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid parameter
 *       '404':
 *         description: Not found
 */
router.get('/photos/:id', propertiesCtrl.getPropertyPhotos);

module.exports = router;