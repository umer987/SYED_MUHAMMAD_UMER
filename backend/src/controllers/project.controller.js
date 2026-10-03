const projectmodel = require('../config/models/projects.model')
const uploadfile = require('../services/imagekit.service')

async function projectcontroller(req, res) {
     console.log('PROJECT_UPLOADER_DEBUG', {
          fields: req.body,
          file: req.file ? { originalname: req.file.originalname, size: req.file.size, mimetype: req.file.mimetype } : null
     })

     const { title, category, image, description, discription, liveLink, link } = req.body

     if (!req.file) {
          return res.status(400).json({
               success: false,
               message: 'Project image is required'
          })
     }

     try {
          const result = await uploadfile(req.file.buffer)
          const cleanDescription = description || discription || ''
          const cleanLiveLink = liveLink || link || ''

          const project = await projectmodel.create({
               title,
               category,
               image: result.url,
               description: cleanDescription,
               discription: cleanDescription,
               liveLink: cleanLiveLink,
               link: cleanLiveLink
          })

          return res.status(200).json({
               project,
               message: 'Project uploaded successfully'
          })
     } catch (error) {
          console.error(error)
          return res.status(500).json({
               success: false,
               message: 'Project upload failed',
               error: error?.message || 'Unknown error'
          })
     }
}

async function get_all_projects(req, res) {
     try {
          const projects = await projectmodel.find({}).sort({ _id: -1 })
          const normalizedProjects = projects.map((project) => {
               const plainProject = project.toObject ? project.toObject() : project
               return {
                    ...plainProject,
                    description: plainProject.description || plainProject.discription || '',
                    discription: plainProject.discription || plainProject.description || '',
                    liveLink: plainProject.liveLink || plainProject.link || '',
                    link: plainProject.link || plainProject.liveLink || ''
               }
          })

          return res.status(200).json({
               message: `projects fetched successfully count is ${normalizedProjects.length}`,
               projects: normalizedProjects
          })
     } catch (error) {
          console.error(error)
          return res.status(500).json({ message: 'Server error while fetching messages' })
     }
}

module.exports = {
     projectcontroller,
     get_all_projects
};
