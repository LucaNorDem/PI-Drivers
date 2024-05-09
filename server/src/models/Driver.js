const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Driver', {
    id_driver: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    id: {
      type: DataTypes.INTEGER,      
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },    
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },    
    nationality: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthday: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      // allowNull: false,
    },
    
  },
  {
    timestamps: false,
  });
};