const express = requite('express')
const countriesRouter = require('./countries.router')
function routerApi(app) {
    const router = express.Router()

    this.use('/countries', countriesRouter)



}

module.exports = routerApi;