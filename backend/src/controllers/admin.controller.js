const adminmodel = require("../config/models/admin.model")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
async function admincontroller(req , res) {
    const {email , name , password } = req.body 
\   const hash = await bcrypt.hash(password,10)
    const admin = await adminmodel.create({
        email:email,
        name:name,
        password:hash
    })
     return res.status(200).json({
          email , name , password
    })
}


module.exports = {
    admincontroller
};
