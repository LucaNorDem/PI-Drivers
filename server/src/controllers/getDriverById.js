const {Driver, Team} = require("../db");
const axios = require("axios");


const getDriverById = async (id) =>{
    console.log(id);

    try {

        if(id < 509){
           const {data} = await axios.get(`http://localhost:5000/drivers/${id}`);
           if (!data.image.url || data.image.url === "https://cdn.pixabay.com/photo/2013/07/12/15/36/motorsports-150157_960_720.png") {
                data.image.url = "https://t3.ftcdn.net/jpg/05/80/42/74/360_F_580427495_cfOCzziGletcVTsflOYuT8oJTo5PZHJK.jpg";
            }

           return data;
           
        }
        
        

        const driverDb = await Driver.findOne({
            where:{id},
        });

        const teams = await driverDb.getTeams();

        const driver = {
            id: driverDb.id,
            name:{
                forename: driverDb.name,
                surname: driverDb.lastname
            },
            image:{
                url: driverDb.image,
            },
            dob: driverDb.birthday,
            nationality: driverDb.nationality,
            teams: teams.map(t => t.name).join(", "),
            description: driverDb.description,
        }
        
        return driver || null;
        
        
    } catch (error) {
        throw new Error("Something went wrong...");
    }

}



module.exports = getDriverById;