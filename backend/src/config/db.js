const mongoose = require("mongoose")

async function connect_db() {
   await mongoose.connect(process.env.DB)
    console.log("DATABASE CONNECTED")
}


module.exports = connect_db