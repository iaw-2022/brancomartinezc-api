const db = require('../database');
const getSQLQueryWithCombinedFilters = require('../utils/propertiesFilter');

const getProperties = async (req, res) => {
    const response = await db.query(getSQLQueryWithCombinedFilters(req));
    
    if(response.rows.length > 0){
        res.status(200).json(response.rows);
    }else{
        res.status(404).json({error: 'not found'});
    }
};

const getPropertyById = async (req, res) => {
    const response = await db.query('SELECT * FROM properties WHERE id = $1',[req.params.id]);
    
    if(response.rows.length > 0){
        res.status(200).json(response.rows[0]);
    }else{
        res.status(404).json({error: 'not found'});
    }
};

const getPropertiesByCity = async (req, res) => {
    const response = await db.query('SELECT * FROM properties WHERE city_id = $1',[req.params.id]);
    
    if(response.rows.length > 0){
        res.status(200).json(response.rows);
    }else{
        res.status(404).json({error: 'not found'});
    }
};

const getPropertiesByCountry = async (req, res) => {
    const response = await db.query('SELECT properties.* FROM properties INNER JOIN cities ON properties.city_id=cities.id WHERE cities.country_code=$1',[req.params.id]);
    
    if(response.rows.length > 0){
        res.status(200).json(response.rows);
    }else{
        res.status(404).json({error: 'not found'});
    }
};

const getPropertyPhotos = async (req, res) => {
    const response = await db.query('SELECT path FROM photos WHERE property_id = $1',[req.params.id]);
    
    if(response.rows.length > 0){
        res.status(200).json(response.rows);
    }else{
        res.status(404).json({error: 'not found'});
    }
};

module.exports = {
    getProperties,
    getPropertyById,
    getPropertiesByCity,
    getPropertiesByCountry,
    getPropertyPhotos
};