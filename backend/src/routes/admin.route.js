const express = require('express')
const router = express.Router()
const projectcontroller = require('../controllers/project.controller')
const multer = require('multer')
const  admincontroller  = require('../controllers/admin.controller')
//const authmiddleware = require('../middleware/auth.middleware')
const upload = multer({storage:multer.memoryStorage()})

router.post('/add-admin' , admincontroller.admincontroller)
router.post('/login' , admincontroller.logincontroller)
router.post('/logout',admincontroller.logoutController)

module.exports = router
