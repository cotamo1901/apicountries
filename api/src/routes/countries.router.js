const express = require('express');
const router = express.Router();

const{getCountryApi,getDbData} =require('../controllers/country.controller')
router.get('/', (req, res) => {
  
  res.send("Hola");
});

module.exports = router;
