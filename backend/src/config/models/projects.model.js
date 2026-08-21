const mongoose = require('mongoose')

const projectsschema = new mongoose.Schema({
    title:String,
    category: string,
    image:String,
    discription:String
})
const projectmodel = mongoose.model("projects" , projectsschema)


module.exports = projectmodel
