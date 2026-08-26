const express = require('express')
const router = express.Router()
const projectcontroller = require('../controllers/project.controller')
const multer = require('multer')
const upload = multer({storage:multer.memoryStorage()})

router.post('/add-project', upload.single("image"), projectcontroller.projectcontroller)
router.get('/all-project', projectcontroller.get_all_projects)

module.exports = router
