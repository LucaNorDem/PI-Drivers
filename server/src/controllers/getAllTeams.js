const { Team } = require("../db");
const axios = require("axios");
const teamsLogos = require("../utils/teamsLogos");

const getAllTeams = async (req, res) => {

    try {

        const countTeams = await Team.count();
        let teams = [];

        if(!countTeams) {
            const resp = await axios('http://localhost:5000/db');
            const drivers = resp.data.drivers;
            
            drivers.forEach(driver => {
                const driverTeams = driver.teams ? driver.teams.split(",").map(team => team.trim()) : [];
                teams.push(...driverTeams);
            });
            
            teams = [...new Set(teams)];

            const promises = teams.map(name => Team.findOrCreate({
                where: { name },
                defaults: {
                    image: teamsLogos[name],
                }
            }));

            await Promise.all(promises);

        }else{
            teams = await Team.findAll();
        }

        return teams;

    } catch (error) {

        throw new Error("Something went wrong, try again later.")

    }
}


module.exports = getAllTeams;