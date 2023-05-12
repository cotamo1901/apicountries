const { ValidationErrorItemType } = require("sequelize");
const { Pokemon } = require("../db");
require("dotenv").config();
const URL_API = process.env.URL_API;

async function getCountryApi() {
  const response = await fetch(URL_API);
  let data = await response.json();
  data = data.map((country) => ({
    id: country.id,
  }));
  return data;
}

const getDbData = async () => {
  try {
    const countrydb = await Pokemon.findAll({});
    return countrydb;
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getCountryApi,
  getDbData,
};
