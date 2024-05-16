const { Router } = require("express");
const teamsRouter = Router();

const getAllTeams = require("../../controllers/getAllTeams");


teamsRouter.get("/", async (req, res)=>{

    try {
        
        const teams = await getAllTeams();
        
        res.status(200).json(teams);

    } catch (error) {
        
        res.status(500).json({error: error.message});

    }
    

})

module.exports = teamsRouter;