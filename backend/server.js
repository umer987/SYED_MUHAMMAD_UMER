require('dotenv').config()
const app = require('./src/app')

if (process.env.NODE_ENV !== 'production') {
    app.listen(3000,()=>{
        console.log("SERVER STARTED")
    })
}

module.exports = app