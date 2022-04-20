const db = require('../database');

const getCities = async (req, res) => {
    const response = await db.query('SELECT * FROM cities');
    res.status(200).json(response.rows);
};

module.exports = {
    getCities
}