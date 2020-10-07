const express = require('express');
const router = express.Router()

const projectsController = require('../controllers/projects');

router.get('/resume', projectsController.getResume);

router.get('/getProjects', projectsController.getProjects)

module.exports = router;