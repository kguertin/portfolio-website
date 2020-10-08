const fs = require('fs');
const path = require('path')

const Project = require('../model/projects');

exports.getResume = (req, res, next) => {
    const src = fs.createReadStream(path.join('data', 'resume.pdf'));
    res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=resume.pdf',
        'Content-Transfer-Encoding': 'Binary'
      });
    
      src.pipe(res); 
}

exports.getProjects = async (req, res, next) => {
  const projects = await Project.find();
  console.log(projects)
  res.status(200).json({projects})
}
