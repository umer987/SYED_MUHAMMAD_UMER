const messagemodel = require('../config/models/message.model')

async function messagecontroller(req,res) {
    const {email , name , projectbreif} = req.body
    const message = messagemodel.create({
        email:email,
        name:name
    })
}