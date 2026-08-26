const express = require('express')
const router = express.Router()
const messagecontroller = require('../controllers/message.controller')
const authmiddleware = require('../middleware/auth.middleware')

router.post('/message-me' , messagecontroller.messagecontroller)
router.get('/get-message' ,authmiddleware, messagecontroller.get_all_messages)



module.exports = router
