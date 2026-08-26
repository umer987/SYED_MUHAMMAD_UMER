const messagemodel = require('../config/models/message.model')

async function messagecontroller(req,res) {
    const {email , name , projectbreif} = req.body
    try{
        const message = await messagemodel.create({
        email:email,
        name:name,
        projectbreif:projectbreif
    })
    console.log(message)
    return res.status(200).json({
        message:"message send successfully",
        message
    })
    }
    catch(err){
        res.status(401).json({ message: "all feilds are requuired" });
    }

}



async function get_all_messages(req,res) {
    try{
        const messages = await messagemodel.find({}).sort({ _id: -1 });
        return res.status(200).json({
            count: messages.length,
            messages: messages
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error while fetching messages" });
    }
}




module.exports = {
    messagecontroller,
    get_all_messages
};
