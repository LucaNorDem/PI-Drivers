const { Driver } = require("../db");
const axios = require("axios");
const { Op } = require("sequelize");


const getDriversByQuery = async (query) =>{

    try {
        const searchQuery = query.toLowerCase();
        const searchWords = searchQuery.split(' ');

        //Busqueda en la api usando query
        const resp = await axios('http://localhost:5000/db');

        const apiDrivers = resp.data.drivers.filter(driver => {
            let driverName = `${driver.name.forename} ${driver.name.surname}`
            return driverName.toLowerCase().includes(searchQuery);
        });

        const formatApiDrivers = apiDrivers.map(driver=>({           
            id: driver.id,
            name: `${driver.name.forename} ${driver.name.surname}`,            
        }))
        


        //Busqueda en la db usando query
        const dbDrivers = await Driver.findAll({
            where: {
                [Op.or]:[
                    {name: {[Op.iLike]: `%${searchQuery}%`}},
                    {lastname: {[Op.iLike]: `%${searchQuery}%`}},
                    {
                        [Op.and]: searchWords.map(word => ({
                            [Op.or]: [
                                { name: { [Op.iLike]: `%${word}%` } },
                                { lastname: { [Op.iLike]: `%${word}%` } }
                            ]
                        }))
                    }

                ]
            },
            limit: 15,
        })
        const formatDbDrivers = dbDrivers.map((driver)=>{

            return {
                id: driver.id,
                name:`${driver.name} ${driver.lastname}`,                
            }
            
        })

        //combino ambas busquedas de api y db, luego solo obtengo los primeros 15
        let combinedApiDbDrivers = [...formatApiDrivers, ...formatDbDrivers];

        combinedApiDbDrivers = combinedApiDbDrivers.slice(0, 15);

        return combinedApiDbDrivers.length > 0 
        ? combinedApiDbDrivers
        : [{id:0,name: "No driver found"}]; 
        
    } catch (error) {

        throw new Error(error.message);
        
    }

}

module.exports = getDriversByQuery;