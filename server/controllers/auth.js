const User = require('../models/User')


module.exports =  async (req, res) => {
    const { name, email, picture } = req.user

    const user = await User.findOneAndUpdate({email}, {name, picture}, {new: true})
    if(user) {
        console.log('updated user', user)
        res.json(user)
    }else {
        const newUser = new User({
            name,
            email,
            picture
        })

        console.log('new user', newUser)
        await newUser.save()

        res.json(newUser)
    }

}