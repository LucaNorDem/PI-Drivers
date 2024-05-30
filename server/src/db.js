require("dotenv").config();
const { Sequelize } = require("sequelize");
// const DriverModel = require("./models/Driver");
// const TeamModel = require("./models/Team");
const DriverModel = require("./models/Driver");
const TeamModel = require("./models/Team");


const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY,
} = process.env;

// const database = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/drivers`, {
//   logging: false, 
//   native: false, 
// });
const database = new Sequelize(DB_DEPLOY, {
  logging: false, 
  native: false, 
});


const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


modelDefiners.forEach(model => model(database));

let entries = Object.entries(database.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
database.models = Object.fromEntries(capsEntries);

DriverModel(database);
TeamModel(database);
const { Driver, Team } = database.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

Driver.belongsToMany(Team, {through: "driver_team"});
Team.belongsToMany(Driver, {through: "driver_team"});

// Driver.belongsToMany(Team, {through :"driver_team"});
// Team.belongsToMany(Driver, {through :"driver_team"});

module.exports = {
  Driver,
  Team,
  ...database.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: database,     // para importart la conexión { conn } = require('./db.js');
};