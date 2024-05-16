const {Driver, Team} = require("../db");
const axios = require("axios");


const getDriverById = async (id) =>{

    try {

        if(id < 509){
           const {data} = await axios.get(`http://localhost:5000/drivers/${id}`);
           if (!data.image.url || driver.image.url === "https://cdn.pixabay.com/photo/2013/07/12/15/36/motorsports-150157_960_720.png") {
                data.image.url = "https://t3.ftcdn.net/jpg/05/80/42/74/360_F_580427495_cfOCzziGletcVTsflOYuT8oJTo5PZHJK.jpg";
            }

           return data;
           
        }
        

        const driverDb = await Driver.findOne({
            where:{id},
            includes: Team,
        });

        
        
        return driverDb || null;
        
        
    } catch (error) {
        // console.log(error);
        throw new Error(error.message);
    }

}



module.exports = getDriverById;