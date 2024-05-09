const { Driver } = require("../db");
const axios = require("axios");
const { Op } = require("sequelize");

const getDrivers = async (req, res) => {
    const { name } = req.query;
    if (!name) {
        axios.get('http://localhost:5000/db')
            .then(resp => {
                const drivers = resp.data.drivers;
                res.status(200).json(drivers);
            })
            .catch(error => {
                res.status(400).json({ error: error.message });
            });
    } else {

        try {
            const searchQuery = name.toLowerCase();

            //Busqueda en la api usando query
            const resp = await axios('http://localhost:5000/db');
            // console.log(resp.data);
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

            let combinedApiDbDrivers = [...apiDrivers, ...dbDrivers];

            combinedApiDbDrivers = combinedApiDbDrivers.slice(0, 15);

            return combinedApiDbDrivers.length > 0 
            ? res.status(200).json(combinedApiDbDrivers)
            : res.status(404).json({message: "No driver found"}); 
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({error:error.message});
        }

    }
}


module.exports = getDrivers;