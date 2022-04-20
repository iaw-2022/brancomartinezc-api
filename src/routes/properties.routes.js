const express = require('express');
const router = express.Router();
const propertiesCtrl = require('../controllers/properties.controller');

router.get('/', propertiesCtrl.getProperties);
router.get('/:id', propertiesCtrl.getPropertyById);
router.get('/city/:id', propertiesCtrl.getPropertiesByCity);

module.exports = router;