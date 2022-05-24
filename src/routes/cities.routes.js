const express = require('express');
const router = express.Router();
const citiesCtrl = require('../controllers/cities.controller');

/**
 * @swagger
 * /cities:
 *   get:
 *     description: Use to request all cities.
 *     tags: 
 *       - Cities
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid parameter
 *       '404':
 *         description: Not found
 */
router.get('/', citiesCtrl.getCities);

router.get('/count', citiesCtrl.getCitiesCount);

/**
 * @swagger
 * /cities/{id}:
 *   get:
 *     description: Use to request a city.
 *     tags: 
 *       - Cities
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
router.get('/:id', citiesCtrl.getCityById);

/**
 * @swagger
 * /cities/country/{country_code}:
 *   get:
 *     description: Use to request all cities of a country.
 *     tags: 
 *       - Cities
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
router.get('/country/:id', citiesCtrl.getCitiesByCountry);

module.exports = router;