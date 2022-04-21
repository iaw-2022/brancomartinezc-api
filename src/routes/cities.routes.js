const express = require('express');
const router = express.Router();
const citiesCtrl = require('../controllers/cities.controller');

router.get('/', citiesCtrl.getCities);
router.get('/:id', citiesCtrl.getCityById);
router.get('/country/:id', citiesCtrl.getCitiesByCountry);

module.exports = router;