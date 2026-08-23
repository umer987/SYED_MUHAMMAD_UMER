const adminmodel = require('../config/models/admin.model')

async function adminauth(req,res,next) {
    const token = req.cookies.token
      if (!token) {
        return res.status(401).json({
            message: "USER IS NOT LOGIN",
            status: 'failed'
        })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT)
        const adminid = decoded?._id || decoded?.id

        if (!adminid) {
            return res.status(401).json({
                message: "UNAUTHORIZED ACCESS: INVALID TOKEN PAYLOAD",
                status: 'failed'
            })
        }
        const admin = await adminmodel.findById(adminid)
         if (!admin) {
            return res.status(401).json({
                message: "UNAUTHORIZED ACCESS: INVALID TOKEN PAYLOAD",
                status: 'failed'
            })
        }
        req.admin = admin
        req.adminid = adminid
        return next()
    }
     catch (err) {
        return res.status(401).json({
            message: `UNAUTHORIZED ACCESS ${err}`,
            status: 'failed'
        })
    }
}

module.exports = {
    adminauth
};
