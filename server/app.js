const express = require('express');
const cors = require('cors');

const app = express();

const projectRoutes = require('./routes/projects');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', "GET, POST, PUT, PATCH, DELETE");
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Disposition, Content-Transfer-Encoding');
    next();
})

app.use(projectRoutes);

app.listen(5000, () => {
    console.log('Server running on port 5000');
})

