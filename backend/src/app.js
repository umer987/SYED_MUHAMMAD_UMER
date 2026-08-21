const cors = require('cors')
const express  = require('express')
const app = express()
app.use(express.json())
app.use(cors())
const projectroute = require('./routes/project.route')


app.use('/api/')




module.exports = app