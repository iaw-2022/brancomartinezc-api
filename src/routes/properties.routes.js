const express = require('express');
const router = express.Router();
const propertiesCtrl = require('../controllers/properties.controller');

router.get('/', propertiesCtrl.getProperties);
router.get('/:id', propertiesCtrl.getPropertyById);
router.get('/city/:id', propertiesCtrl.getPropertiesByCity);
router.get('/country/:id', propertiesCtrl.getPropertiesByCountry);
router.get('/type/:type', propertiesCtrl.getPropertiesByType);

module.exports = router;