const { Driver } = require("../db");
const axios = require("axios");

const getDrivers = async (req, res) => {
    
    try {

        const resp = await axios.get('http://localhost:5000/db')
        const driversApi = resp.data.drivers;

        driversApi.forEach(driver => {
            if (!driver.image.url) {
                driver.image.url = "https://t3.ftcdn.net/jpg/05/80/42/74/360_F_580427495_cfOCzziGletcVTsflOYuT8oJTo5PZHJK.jpg";
            }
        })

        const driversDb = await Driver.findAll();

        const allDrivers = [...driversApi, ...driversDb]

        return allDrivers;

    } catch (error) {

        throw new Error(error.message);

    }
    
}


module.exports = getDrivers;