const adminmodel = require("../config/models/admin.model")
const jwt = require('jsonwebtoken')
async function admincontroller(req , res) {
    const {email , name , password } = req.body 
    console.log(email , name , password)
    const 
    const admin = await adminmodel.create({
        email:email,
        name:name,
        password
    })
     return res.status(200).json({
          email , name , password
    })
}


module.exports = {
    admincontroller
};
