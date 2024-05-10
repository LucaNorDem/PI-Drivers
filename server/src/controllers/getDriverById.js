const {Driver, Team} = require("../db");
const axios = require("axios");


const getDriverById = async (id) =>{

    try {

        if(id < 409){
           const {data} = await axios.get(`http://localhost:5000/drivers/${id}`);

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