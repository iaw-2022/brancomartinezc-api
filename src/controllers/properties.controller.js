const db = require('../database');
const getSQLQueryWithCombinedFilters = require('../utils/propertiesFilter');

const getProperties = async (req, res) => {
    try{
        const response = await db.query(getSQLQueryWithCombinedFilters(req));
    
        if(response.rows.length > 0){
            res.status(200).json(response.rows);
        }else{
            res.status(404).json({error: 'not found'});
        }
    }catch(err){
        res.status(400).json({error: 'invalid json parameters'});
    }
};

const getLatestProperties = async (req, res) => {
    const response = await db.query('SELECT * FROM properties ORDER BY id DESC LIMIT 3');
    
    if(response.rows.length > 0){
        res.status(200).json(response.rows);
    }else{
        res.status(404).json({error: 'not found'});
    }
};

const getPropertiesCount = async (req, res) => {
    const response = await db.query('SELECT COUNT(id) as count FROM properties');
    
    if(response.rows.length > 0){
        res.status(200).json(response.rows[0]);
    }else{
        res.status(404).json({error: 'not found'});
    }
};

const getPropertyById = async (req, res) => {
    if(!isNaN(req.params.id)){
        const response = await db.query('SELECT properties.*, cities.name AS city_name, cities.state AS city_state, cities.country, cities.country_code FROM properties INNER JOIN cities ON properties.city_id=cities.id WHERE properties.id = $1',[req.params.id]);
    
        if(response.rows.length > 0){
            res.status(200).json(response.rows[0]);
        }else{
            res.status(404).json({error: 'not found'});
        }
    }else{
        res.status(400).json({error: 'invalid parameter'});
    }
};

const getPropertiesByCity = async (req, res) => {
    if(!isNaN(req.params.id)){
        const response = await db.query('SELECT * FROM properties WHERE city_id = $1',[req.params.id]);
        
        if(response.rows.length > 0){
            res.status(200).json(response.rows);
        }else{
            res.status(404).json({error: 'not found'});
        }
    }else{
        res.status(400).json({error: 'invalid parameter'});
    }
};

const getPropertiesByCountry = async (req, res) => {
    if(typeof req.params.id === 'string' && req.params.id.length===2){
        const response = await db.query('SELECT properties.* FROM properties INNER JOIN cities ON properties.city_id=cities.id WHERE cities.country_code=$1',[req.params.id]);
        
        if(response.rows.length > 0){
            res.status(200).json(response.rows);
        }else{
            res.status(404).json({error: 'not found'});
        }
    }else{
        res.status(400).json({error: 'invalid parameter'});
    }
};

const getPropertyPhotos = async (req, res) => {
    if(!isNaN(req.params.id)){
        const response = await db.query('SELECT path FROM photos WHERE property_id = $1',[req.params.id]);
        
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
    getProperties,
    getPropertiesCount,
    getLatestProperties,
    getPropertyById,
    getPropertiesByCity,
    getPropertiesByCountry,
    getPropertyPhotos,
};