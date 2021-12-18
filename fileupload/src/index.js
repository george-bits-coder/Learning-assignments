const express = require('express');
const app = express();

const userController = require('./controller/user.controller');

const imagesController = require('./controller/images.controller');

app.use(express.json());

app.use('/user', userController);
app.use('/images', imagesController);


module.exports = app;
