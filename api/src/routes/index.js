
const countriesRouter = require('')
function routerApi(app) {
    const router = express.Router()
    router.use('/countries', countriesRouter)
}



module.exports = routerApi;
