const projectmodel = require('../config/models/projects.model')

async function projectcontroller(req,res) {
     const {title ,category ,image ,discription} = req.body
     console.log(title ,category ,image ,discription)

     return res.status(201).json({

     })
}

module.exports = {
    projectcontroller
};
