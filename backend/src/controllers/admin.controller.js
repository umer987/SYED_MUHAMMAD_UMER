const adminmodel = require("../config/models/admin.model")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
async function admincontroller(req , res) {
    const {email , name , password } = req.body 
 const hash = await bcrypt.hash(password,10)
    const admin = await adminmodel.create({
        email:email,
        name:name,
        password:hash
    })
    const token = jwt.sign({id:admin._id},process.env.JWT)
    res.cookie("token", token)
     return res.status(200).json({
          email , name , password , token
    })
}

async function logincontroller(req , res) {
    const {email , password } = req.body 
    const admin = await adminmodel.findOne({ email: email });
    const hash = await bcrypt.compare(password)

    const token = jwt.sign({id:admin._id},process.env.JWT)
    res.cookie("token", token)
     return res.status(200).json({
          email , name , password , token
    })
}

module.exports = {
    admincontroller
};
