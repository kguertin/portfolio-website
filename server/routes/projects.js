const express = require('express');
const router = express.Router()

const projectController = require('../controllers/projects');

router.get('/resume', projectsController.getResume);

module.export = router;