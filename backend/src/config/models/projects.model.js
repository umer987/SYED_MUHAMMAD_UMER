const mongoose = require('mongoose')

const projectsschema = new mongoose.Schema({
    title: String,
    category: String,
    image: String,
    description: String,
    liveLink: String,
    link: String,
    discription: String
})

const projectmodel = mongoose.model("projects", projectsschema)

module.exports = projectmodel
