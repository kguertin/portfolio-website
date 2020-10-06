const express = require('express');
const router = express.Router()

const projectsController = require('../controllers/projects');

router.get('/resume', projectsController.getResume);

router.get('/skills', projectsController.getSkills);

module.exports = router;