const getDrivers = require("../controllers/getDrivers");
const getAllTeams = require("../controllers/getAllTeams")

const { Router } = require("express");
const router = Router();

router.get("/drivers/:id", (req, res)=>{
    res.status(200).send("Ruta get a /drivers/:id")
})

router.get("/", getDrivers);

router.post("/drivers", (req, res)=>{
    res.status(200).send("Ruta post a /drivers")
})

router.get("/teams", getAllTeams)




module.exports = router;
