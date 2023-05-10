const express = require('express')

const countriesRouter = require('./countries.router')
function routerApi(app) {
    const router = express.Router()
    router.use('/countries', countriesRouter)
}



module.exports = routerApi;
