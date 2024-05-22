const { Driver, Team } = require("../db");

const postDriver = async (driver) =>{
    const {name, lastname, nationality, birthday, image, description, teams} = driver;
    
    try {

        if(name && lastname && nationality && birthday){
            
            const [newDriver, created] = await Driver.findOrCreate({
                where:{                    
                    name,
                    lastname,
                    nationality,
                    birthday,
                },
                defaults:{
                    image: image,
                    description: description ? description : "There is no description for this driver",
                }
            })

            if (!created) {
                return {
                    status: 409,
                    message: "Driver already added.",
                    created
                }
            }
            
            if (teams && teams.length > 0) {                
                const teamsDb = await Team.findAll({
                    where: {
                        name: teams,
                    }
                });

                await newDriver.addTeams(teamsDb);
            }
            

            return {
                status: 200,
                message: "Driver added succesfully",
                created
            }

        }else{
            return { 
                status: 400,
                message: "Required fields are necesary to complete",
                created: false,
            }
        }
        
    } catch (error) {

        throw new Error("Something went wrong, try again later.");

    }

}

module.exports = postDriver;