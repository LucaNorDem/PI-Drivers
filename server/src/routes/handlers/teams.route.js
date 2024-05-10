const { Router } = require("express");
const teamsRouter = Router();

const getAllTeams = require("../../controllers/getAllTeams");


teamsRouter.get("/", getAllTeams);



module.exports = teamsRouter;