const fs = require('fs');
const path = require('path')

exports.getResume = (req, res, next) => {
    fs.readFile(path.join('data', 'resume.pdf'), (err, data) => {
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'inline; filename="' + 'resume.pdf' + '"');
      console.log(res)
      res.status(200).send(data);
    })
}