const {Router} = require('express')

const countries = require("./countries.router");

const router = Router()

router.use('/countries',countries)


module.exports=router;