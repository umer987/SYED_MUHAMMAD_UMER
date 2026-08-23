const cors = require('cors')
const express  = require('express')
const app = express()
app.use(express.json())
app.use(cors())
const projectroute = require('./routes/project.route')
const adminroute = require('./routes/admin.route') 

app.use('/api/project' , projectroute)
app.use('/api/admin' , adminroute)




module.exports = app