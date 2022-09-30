const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');


// Import routes
const userRoutes = require('./routes/userRoutes');
const propRoutes = require('./routes/propertyRoutes');

//Router MIddlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({extended:false}));
app.use(cors());
app.use('/', userRoutes);
app.use('/', propRoutes);

module.exports = app;
