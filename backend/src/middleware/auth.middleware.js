const adminmodel = require('../config/models/admin.model');
const jwt = require('jsonwebtoken'); // Added missing import

async function adminauth(req, res, next) {
    const token = req.cookies.token;
    
    if (!token) {
        return res.status(401).json({
            message: "USER IS NOT LOGGED IN",
            status: 'failed'
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT);
        const adminid = decoded?._id || decoded?.id;

        if (!adminid) {
            return res.status(401).json({
                message: "UNAUTHORIZED ACCESS: INVALID TOKEN PAYLOAD",
                status: 'failed'
            });
        }

        const admin = await adminmodel.findById(adminid);
        
        if (!admin) {
            return res.status(401).json({
                message: "UNAUTHORIZED ACCESS: ADMIN NOT FOUND",
                status: 'failed'
            });
        }

        // Attach the admin data to the request so the next route can use it
        req.admin = admin;
        req.adminid = adminid;
        
        return next();
        
    } catch (err) {
        // Cleaned up the error message to avoid leaking backend details
        return res.status(401).json({
            message: "UNAUTHORIZED ACCESS: INVALID OR EXPIRED TOKEN",
            status: 'failed'
        });
    }
}

module.exports = adminauth
