const db = require('../database');

const getFavorites = async (req, res) => {
    const response = await db.query('SELECT * FROM favorites WHERE user_email = $1',[req.params.email]);
    
    if(response.rows.length > 0){
        res.status(200).json(response.rows);
    }else{
        res.status(404).json({error: 'not found'});
    }
};

const addFavorite = async (req, res) => {
    const {user_email, property_id} = req.body;

    //checks if is alredy in favorites
    const response = await db.query('SELECT * FROM favorites WHERE user_email = $1 AND property_id = $2',[user_email, property_id]);
    if(response.rows.length > 0){
        res.status(400).json({error: 'property is alredy in favorites'});
    }else{//if not, is inserted
        db.query('INSERT INTO favorites VALUES ($1,$2)',[user_email, property_id])
        .then(() => res.status(200).json({msg: 'property added to favorites'}))
        .catch(e => res.status(400).json({error: e}));
    }
};

const removeFavorite = async (req, res) => {
    const {user_email, property_id} = req.body;

    //checks if is in favorites
    const response = await db.query('SELECT * FROM favorites WHERE user_email = $1 AND property_id = $2',[user_email, property_id]);
    if(response.rows.length > 0){//is deleted
        db.query('DELETE FROM favorites WHERE user_email = $1 AND property_id = $2',[user_email, property_id])
        .then(() => res.status(200).json({msg: 'property removed from favorites'}))
        .catch(e => res.status(400).json({error: e}));
    }else{
        res.status(400).json({error: 'property is not in favorites'});
    }
};

module.exports = {
    getFavorites,
    addFavorite,
    removeFavorite
};