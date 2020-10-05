const express = require('express');
const router = express.Router()

const projectsController = require('../controllers/projects');

router.get('/resume', projectsController.getResume);

module.exports = router;