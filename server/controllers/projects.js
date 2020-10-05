const fs = require('fs');
const path = require('path')

exports.getResume = (req, res, next) => {
    const src = fs.createReadStream(path.join('data', 'resume.pdf'));
    res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=resume.pdf',
        'Content-Transfer-Encoding': 'Binary'
      });
    
      src.pipe(res); 
}