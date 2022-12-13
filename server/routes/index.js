const Router = require('express')
const router = new Router()
const vitaminsRouter = require('./vitaminsRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/vitamins', vitaminsRouter)

module.exports = router