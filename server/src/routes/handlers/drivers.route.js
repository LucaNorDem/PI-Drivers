const { Router } = require("express");
const driversRouter = Router();

const getDrivers = require("../../controllers/getDrivers");
const getDriverById = require("../../controllers/getDriverById");
const getDriversByQuery = require("../../controllers/getDriversByQuery");
const postDriver = require("../../controllers/postDriver");



driversRouter.get("/:id", async (req, res)=>{

    try {
        const { id } = req.params;
        const driver = await getDriverById(id);

        if(driver){
            res.status(200).json(driver);
        }else if (driver === null){
            res.status(404).json({message: "No driver found"});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
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
            res.status(404).json({message: "No driver found"});
        }

    } catch (error) {
        res.status(500).json({message: error.message});
    }
    

});

driversRouter.post("/", async (req, res)=>{

    const driver = req.body;

    try {

        const pDriver = await postDriver(driver);

        switch (pDriver.status) {
            case 200:
                return res.status(200).json({ message: pDriver.message, created: pDriver.created });

            case 400:
                return res.status(400).json({ message: pDriver.message, created: pDriver.created });

            case 409:
                return res.status(409).json({ message: pDriver.message, created: pDriver.created });

            default:
                return res.status(500).json({ message: pDriver.message });;
        }


    } catch (error) {

        res.status(500).json({ error: error.message });

    }
})

module.exports = driversRouter;
