const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("country", {
   id:{
    type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
   },
   name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  flagImage: {
    type: DataTypes.BLOB,
    allowNull: false,
  },
  continent: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  capital: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subregion: {
    type: DataTypes.STRING,
  },
  area: {
    type: DataTypes.FLOAT,
  },
  population: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  });
};
