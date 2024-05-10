const { Router } = require("express");
const driversRouter = Router();

const getDrivers = require("../../controllers/getDrivers");
const getDriverById = require("../../controllers/getDriverById");
const getDriversByQuery = require("../../controllers/getDriversByQuery");



driversRouter.get("/:id", async (req, res)=>{

    try {
        const { id } = req.params;
        const driver = await getDriverById(id);

        if(driver){
            res.status(200).json(driver);
        }else if (driver === null){
            res.status(404).json({error: "No driver found"});
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
    
})

driversRouter.get("/", async (req, res) =>{
    const { name } = req.query;

    let drivers = []

    try {

        if(!name){
            drivers = await getDrivers();
        } else {
            drivers = await getDriversByQuery(name);
        }

        if(drivers){
            res.status(200).json(drivers);
        }else{
            res.status(404).json({error: "No driver found"});
        }

    } catch (error) {
        res.status(500).json({error: error.message});
    }
    

});

driversRouter.post("/", (req, res)=>{
    res.status(200).send("Ruta post a /drivers")
})

module.exports = driversRouter;
