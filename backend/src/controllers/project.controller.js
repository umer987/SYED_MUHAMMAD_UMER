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


async function get_all_projects(req,res) {
     try{
          const projects = await projectmodel.find({}).sort({ _id: -1 })
          return res.status(200).json({
          message:`projects fetched successfully count is ${projects.length}`,
          projects

     })
     }
     catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error while fetching messages" });
    }
}







module.exports = {
     projectcontroller,
     get_all_projects
};
