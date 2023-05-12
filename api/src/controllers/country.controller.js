
const {pokemon} = require('../db')
const URL_API = process.env.URL_API

async function getCountryApi(){
    const response = await fetch(URL_API)
    let data = await response.json()
    data = data.map(())
}