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
    const hash = await bcrypt.compare(password , admin.password)
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
async function logoutController(req, res) {
    try {
        // 1. Check if token exists in cookies
        const token = req.cookies.token;
        
        if (!token) {
            return res.status(401).json({ 
                message: "No active session found. Please login first." 
            });
        }

        // 2. Verify if token is valid
        try {
            const decoded = jwt.verify(token, process.env.JWT);
            
            // Optional: Check if user still exists in database
            const admin = await adminmodel.findById(decoded.id);
            if (!admin) {
                // Clear the invalid cookie
                res.clearCookie("token");
                return res.status(401).json({ 
                    message: "User no longer exists. Please login again." 
                });
            }

        } catch (jwtError) {
            // Token is invalid or expired
            res.clearCookie("token");
            return res.status(401).json({ 
                message: "Invalid or expired session. Please login again." 
            });
        }

        // 3. Clear the token cookie (user is authenticated)
        res.clearCookie("token");

        return res.status(200).json({
            message: "Logout successful",
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        console.error("Logout error:", error);
        return res.status(500).json({
            message: "Error during logout",
            error: error.message
        });
    }
}
module.exports = {
    admincontroller,
    logincontroller,
    logoutController
};
