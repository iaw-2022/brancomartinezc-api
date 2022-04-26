const db = require('../database');
const getSQLQueryWithCombinedFilters = require('../utils/propertiesFilter');

const getProperties = async (req, res) => {
    const response = await db.query(getSQLQueryWithCombinedFilters(req));
    res.status(200).json(response.rows);
};

const getPropertyById = async (req, res) => {
    const response = await db.query('SELECT * FROM properties WHERE id = $1',[req.params.id]);
    res.status(200).json(response.rows);
};

const getPropertiesByCity = async (req, res) => {
    const response = await db.query('SELECT * FROM properties WHERE city_id = $1',[req.params.id]);
    res.status(200).json(response.rows);
};

const getPropertiesByCountry = async (req, res) => {
    const response = await db.query('SELECT properties.* FROM properties INNER JOIN cities ON properties.city_id=cities.id WHERE cities.country_code=$1',[req.params.id]);
    res.status(200).json(response.rows);
};

const getPropertyPhotos = async (req, res) => {
    const response = await db.query('SELECT path FROM photos WHERE property_id = $1',[req.params.id]);
    res.status(200).json(response.rows);
};

module.exports = {
    getProperties,
    getPropertyById,
    getPropertiesByCity,
    getPropertiesByCountry,
    getPropertyPhotos
};