const db = require('../database');

const getCities = async (req, res) => {
    const response = await db.query('SELECT * FROM cities');
    
    if(response.rows.length > 0){
        res.status(200).json(response.rows);
    }else{
        res.status(404).json({error: 'not found'});
    }
};

const getCityById = async (req, res) => {
    const response = await db.query('SELECT * FROM cities WHERE id = $1',[req.params.id]);

    if(response.rows.length > 0){
        res.status(200).json(response.rows[0]);
    }else{
        res.status(404).json({error: 'not found'});
    }
};

const getCitiesByCountry = async (req, res) => {
    const response = await db.query('SELECT * FROM cities WHERE country_code = $1',[req.params.id]);

    if(response.rows.length > 0){
        res.status(200).json(response.rows);
    }else{
        res.status(404).json({error: 'not found'});
    }
};

module.exports = {
    getCities,
    getCityById,
    getCitiesByCountry
}