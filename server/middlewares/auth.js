const admin = require('../firebase')

const auth = (req, res, next) => {
    console.log(req.headers)
    next()
}


module.exports = auth;