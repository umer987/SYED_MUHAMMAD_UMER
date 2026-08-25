const mongoose = require('mongoose')

const messageschema = new mongoose.Schema({
    email:String,
    name:String
    projectbreif: string
})

const messagemodel = mongoose.model("messages",messageschema
)
module.exports = messagemodel