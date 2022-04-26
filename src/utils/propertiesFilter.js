const named = require('yesql').pg

function getSQLQueryWithCombinedFilters(req) {
    const { type, sale_rent, min_area, max_area, min_price, max_price, 
        min_beds, max_beds, min_rooms, max_rooms, min_baths, city_id } = req.body;

    let queryString = 'SELECT * FROM properties ';
    let parameters = {}
    let more_parameters = false;

    if(type!=="*"){
        let typeString;
        if(more_parameters){
            typeString = 'AND type = :type ';
        }else{
            typeString = 'WHERE type = :type ';
            more_parameters = true;
        }
        parameters["type"] = type;
        queryString = queryString.concat(typeString);
    }

    if(sale_rent!=="*"){
        let sale_rentString;
        if(more_parameters){
            sale_rentString = 'AND sale_rent = :sale_rent ';
        }else{
            sale_rentString = 'WHERE sale_rent = :sale_rent ';
            more_parameters = true;
        }
        parameters["sale_rent"] = sale_rent;
        queryString = queryString.concat(sale_rentString);
    }

    if(city_id!=="*"){
        let city_idString;
        if(more_parameters){
            city_idString = 'AND city_id = :city_id ';
        }else{
            city_idString = 'WHERE city_id = :city_id ';
            more_parameters = true;
        }
        parameters["city_id"] = city_id;
        queryString = queryString.concat(city_idString);
    }

    if(min_area!=="*"){
        let min_areaString;
        if(more_parameters){
            min_areaString = 'AND area >= :min_area ';
        }else{
            min_areaString = 'WHERE area >= :min_area ';
            more_parameters = true;
        }
        parameters["min_area"] = min_area;
        queryString = queryString.concat(min_areaString);
    }

    if(max_area!=="*"){
        let max_areaString;
        if(more_parameters){
            max_areaString = 'AND area <= :max_area ';
        }else{
            max_areaString = 'WHERE area <= :max_area ';
            more_parameters = true;
        }
        parameters["max_area"] = max_area;
        queryString = queryString.concat(max_areaString);
    }

    if(min_price!=="*"){
        let min_priceString;
        if(more_parameters){
            min_priceString = 'AND price >= :min_price ';
        }else{
            min_priceString = 'WHERE price >= :min_price ';
            more_parameters = true;
        }
        parameters["min_price"] = min_price;
        queryString = queryString.concat(min_priceString);
    }

    if(max_price!=="*"){
        let max_priceString;
        if(more_parameters){
            max_priceString = 'AND price <= :max_price ';
        }else{
            max_priceString = 'WHERE price <= :max_price ';
            more_parameters = true;
        }
        parameters["max_price"] = max_price;
        queryString = queryString.concat(max_priceString);
    }

    if(min_beds!=="*"){
        let min_bedsString;
        if(more_parameters){
            min_bedsString = 'AND beds >= :min_beds ';
        }else{
            min_bedsString = 'WHERE beds >= :min_beds ';
            more_parameters = true;
        }
        parameters["min_beds"] = min_beds;
        queryString = queryString.concat(min_bedsString);
    }

    if(max_beds!=="*"){
        let max_bedsString;
        if(more_parameters){
            max_bedsString = 'AND beds <= :max_beds ';
        }else{
            max_bedsString = 'WHERE beds <= :max_beds ';
            more_parameters = true;
        }
        parameters["max_beds"] = max_beds;
        queryString = queryString.concat(max_bedsString);
    }

    if(min_rooms!=="*"){
        let min_roomsString;
        if(more_parameters){
            min_roomsString = 'AND rooms >= :min_rooms ';
        }else{
            min_roomsString = 'WHERE rooms >= :min_rooms ';
            more_parameters = true;
        }
        parameters["min_rooms"] = min_rooms;
        queryString = queryString.concat(min_roomsString);
    }

    if(max_rooms!=="*"){
        let max_roomsString;
        if(more_parameters){
            max_roomsString = 'AND rooms <= :max_rooms ';
        }else{
            max_roomsString = 'WHERE rooms <= :max_rooms ';
            more_parameters = true;
        }
        parameters["max_rooms"] = max_rooms;
        queryString = queryString.concat(max_roomsString);
    }

    if(min_baths!=="*"){
        let min_bathsString;
        if(more_parameters){
            min_bathsString = 'AND baths >= :min_baths ';
        }else{
            bathsString = 'WHERE baths >= :min_baths ';
            more_parameters = true;
        }
        parameters["min_baths"] = min_baths;
        queryString = queryString.concat(min_bathsString);
    }

    return named(queryString)(parameters);
}

module.exports = getSQLQueryWithCombinedFilters;