const driversRouter = require("./handlers/drivers.route");
const teamsRouter = require("./handlers/teams.route");


const { Router } = require("express");
const router = Router();


router.use("/drivers", driversRouter);

router.use("/teams", teamsRouter);




module.exports = router;
