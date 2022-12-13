const Router = require('express')
const router = new Router()
const vitaminsController = require('../controllers/vitaminsController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',checkRole('ADMIN'), vitaminsController.create)
router.get('/',vitaminsController.getAll)
router.get('/:id',vitaminsController.getOne)

module.exports = router