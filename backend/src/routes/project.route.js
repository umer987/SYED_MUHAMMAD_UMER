const express = require('express')
const router = express.Router()
const projectcontroller = require('../controllers/project.middleware')

router.post('/add-project' , projectcontroller.projectcontroller)


module.exports = router
