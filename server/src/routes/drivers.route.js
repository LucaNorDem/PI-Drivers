const { Router } = require("express");
const driversRouter = Router();

const getDrivers = require("../controllers/getDrivers");




driversRouter.get("/:id", (req, res)=>{
    res.status(200).send("Ruta get a /drivers/:id")
})

driversRouter.get("/", getDrivers);

driversRouter.post("/", (req, res)=>{
    res.status(200).send("Ruta post a /drivers")
})

module.exports = driversRouter;
