const express = require('express');

const app = express();

const projectRoutes = require('./routes/projects');

app.use(projectRoutes);

app.listen(5000, () => {
    console.log('Server running on port 5000');
})

