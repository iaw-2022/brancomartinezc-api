const express = require('express');
const router = express.Router();
const citiesCtrl = require('../controllers/cities.controller');

router.get('/', citiesCtrl.getCities);

module.exports = router;