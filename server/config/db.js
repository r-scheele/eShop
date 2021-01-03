const mongoose = require('mongoose');
const db = process.env.mongoURI;


const connectDB = async () => {
    try {
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        }

        const conn = await mongoose.connect(db, options)

        console.log(`MongoDB connected on ${conn.connections[0].host}...`)
    } catch (err) {
        console.error(err.message)
        process.exit(1)
    }
}



module.exports = connectDB