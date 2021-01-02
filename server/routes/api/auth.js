const router = require('express').Router()

//controller
const authUser = require('../../controllers/auth')
//middleware
const auth = require('../../middlewares/auth')


router.post('/', auth, authUser)


module.exports = router