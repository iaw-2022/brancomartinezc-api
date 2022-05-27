const express = require('express');
const router = express.Router();
const favoritesCtrl = require('../controllers/favorites.controller');

router.get('/:email', favoritesCtrl.getFavorites);

router.post('/', favoritesCtrl.addFavorite);

router.delete('/', favoritesCtrl.removeFavorite);

module.exports = router;