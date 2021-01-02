const router = require('express').Router()
const userCreateOrUpdate = require('../../controllers/user')


router.get('/', userCreateOrUpdate)


module.exports = router