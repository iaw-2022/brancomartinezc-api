const db = require('../database');

const getCities = async (req, res) => {
    const response = await db.query('SELECT * FROM cities');
    
    if(response.rows.length > 0){
        res.status(200).json(response.rows);
    }else{
        res.status(404).json({error: 'not found'});
    }
};

const getCitiesCount = async (req, res) => {
    const response = await db.query('SELECT COUNT(id) as count FROM cities');
    
    if(response.rows.length > 0){
        res.status(200).json(response.rows[0]);
    }else{
        res.status(404).json({error: 'not found'});
    }
};

const getCityById = async (req, res) => {
    if(!isNaN(req.params.id)){
        const response = await db.query('SELECT * FROM cities WHERE id = $1',[req.params.id]);

        if(response.rows.length > 0){
            res.status(200).json(response.rows[0]);
        }else{
            res.status(404).json({error: 'not found'});
        }
    }else{
        res.status(400).json({error: 'invalid parameter'});
    }
};

const getCitiesByCountry = async (req, res) => {
    if(typeof req.params.id === 'string' && req.params.id.length===2){
        const response = await db.query('SELECT * FROM cities WHERE country_code = $1',[req.params.id]);

        if(response.rows.length > 0){
            res.status(200).json(response.rows);
        }else{
            res.status(404).json({error: 'not found'});
        }
    }else{
        res.status(400).json({error: 'invalid parameter'});
    }
};

module.exports = {
    getCities,
    getCitiesCount,
    getCityById,
    getCitiesByCountry
}