const { Driver } = require("../db");
const axios = require("axios");
const { Op } = require("sequelize");


const getDriversByQuery = async (query) =>{

    try {
        const searchQuery = query.toLowerCase();

        //Busqueda en la api usando query
        const resp = await axios('http://localhost:5000/db');

        const apiDrivers = resp.data.drivers.filter(driver => {
            let driverName = `${driver.name.forename} ${driver.name.surname}`
            return driverName.toLowerCase().includes(searchQuery);
        });

        


        //Busqueda en la db usando query
        const dbDrivers = await Driver.findAll({
            where: {
                name: {[Op.iLike]: `%${searchQuery}%`}
            },
            limit: 15,
        })

        //combinp ambas busquedas de api y db, luego solo obtengo los primeros 15
        let combinedApiDbDrivers = [...apiDrivers, ...dbDrivers];

        combinedApiDbDrivers = combinedApiDbDrivers.slice(0, 15);

        return combinedApiDbDrivers.length > 0 
        ? combinedApiDbDrivers
        : null; 
        
    } catch (error) {

        throw new Error(error.message);
        
    }

}

module.exports = getDriversByQuery;