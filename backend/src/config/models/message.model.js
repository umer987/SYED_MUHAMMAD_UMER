const mongoose = require('mongoose')

const messageschema = new mongoose.Schema({
    email:String,
    projectbreif: string
})

const messagemodel = mongoose.model("messagemodel",messageschema
)
module.exports = messagemodel