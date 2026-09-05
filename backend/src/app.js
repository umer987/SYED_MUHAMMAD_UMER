const cors = require('cors')
const cookie =require('cookie-parser')
const express  = require('express')
const app = express()
app.use(cors({
  origin: ['http://localhost:5173','https://syed-m-umer.vercel.app/'], // Must be the exact URL of your React frontend
  credentials: true,               // Required to allow cookies to pass through
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(cookie())
app.use(express.json())

const projectroute = require('./routes/project.route')
const adminroute = require('./routes/admin.route') 
const messageroute = require('./routes/messageme.route')

app.use('/api/project' , projectroute)
app.use('/api/admin' , adminroute)
app.use('/api/message' , messageroute)



module.exports = app