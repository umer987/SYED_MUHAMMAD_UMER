const express = require('express')
const router = express.Router()
const projectcontroller = require('../controllers/project.controller')

router.post('/add-project' , projectcontroller.projectcontroller)


module.exports = router
