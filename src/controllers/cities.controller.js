const db = require('../database');

const getCities = async (req, res) => {
    const response = await db.query('SELECT * FROM cities');
    res.status(200).json(response.rows);
};

const getCityById = async (req, res) => {
    const response = await db.query('SELECT * FROM cities WHERE id = $1',[req.params.id]);
    res.status(200).json(response.rows);
};

const getCitiesByCountry = async (req, res) => {
    const response = await db.query('SELECT * FROM cities WHERE country_code = $1',[req.params.id]);
    res.status(200).json(response.rows);
};

module.exports = {
    getCities,
    getCityById,
    getCitiesByCountry
}