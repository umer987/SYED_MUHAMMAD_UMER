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
// If no admin is found, stop here and return an error
    if (!admin) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    // 2. Compare the provided password with the stored hash
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    // 3. Generate the JWT (since credentials are correct)
    const token = jwt.sign(
        { id: admin._id }, 
        process.env.JWT// Expire token after 1 day
    );
    // 4. Set the secure HttpOnly cookie
    res.cookie("token", token);

    return res.status(200).json({
        message: "Login successful",
        admin: {
            id: admin._id,
            email: admin.email,
            name:admin.name
        }
    });
}

module.exports = {
    admincontroller
};
