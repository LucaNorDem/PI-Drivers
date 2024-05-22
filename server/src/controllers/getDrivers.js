const { Driver, Team } = require("../db");
const axios = require("axios");

const getDrivers = async (req, res) => {
    
    try {

        const resp = await axios.get('http://localhost:5000/db')
        const driversApi = resp.data.drivers;

        driversApi.forEach(driver => {
            if (!driver.image.url || driver.image.url === "https://cdn.pixabay.com/photo/2013/07/12/15/36/motorsports-150157_960_720.png") {
                driver.image.url = "https://t3.ftcdn.net/jpg/05/80/42/74/360_F_580427495_cfOCzziGletcVTsflOYuT8oJTo5PZHJK.jpg";
            }
        })

        const driversDb = await Driver.findAll();
        const formatDbDrivers = await Promise.all(driversDb.map(async(driver)=>{

            //traemos los teams de cada driver de la DB usando la tabla intermedia
            const teams = await driver.getTeams();
            


            return {
                id: driver.id,
                name:{
                    forename: driver.name,
                    surname: driver.lastname
                },
                image:{
                    url: driver.image,
                },
                dob: driver.birthday,
                nationality: driver.nationality,
                teams: teams.map(t => t.name).join(", "),
                description: driver.description,
            }
        }))

        const allDrivers = [...driversApi, ...formatDbDrivers]

        return allDrivers;

    } catch (error) {
        console.log(error);

        throw new Error(error.message);

    }
    
}


module.exports = getDrivers;