const db = require('../database');

const getProperties = async (req, res) => {
    const response = await db.query('SELECT * FROM properties');
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

module.exports = {
    getProperties,
    getPropertyById,
    getPropertiesByCity
}