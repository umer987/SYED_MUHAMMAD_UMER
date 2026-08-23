const projectmodel = require('../config/models/projects.model')
const uploadfile = require('../services/imagekit.service')





async function projectcontroller(req, res) {
     const { title, category, image, discription } = req.body
      if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Project image is required",
            });
        }
     const result = await uploadfile(req.file.buffer)
     console.log("results are:::::::::::" , result)
     const project = await projectmodel.create({
           title:title,
    category: category,
    image:result.url,
    discription:discription
     })
     return res.status(200).json({
          title, category, image, discription
     })
}










module.exports = {
     projectcontroller
};
