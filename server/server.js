const express = require('express');
require('dotenv').config()
const cors = require('cors')
const morgan = require('morgan')
const { readdirSync } = require('fs')


//Database connection
const connectDB = require('./config/db')
connectDB()





//Express app
const app = express()







//Middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())


readdirSync("./routes/api").map(r => {
    const route = r.split(".")[0]
    app.use('/api/'+ route, require('./routes/api/' + r)
)})


const PORT = process.env.PORT


app.get('/', (req, res) => {
    res.send('eShop')
})

app.listen(PORT, () => console.log('Server started on Port ' + PORT))