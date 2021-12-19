const express = require('express');
const app = express();
const connect = require('./configs/db');
const userController = require('./controllers/user.controller');

app.use(express.json());
app.use('/user', userController);

const start = async () => {
    await connect();

    app.listen(1234, async (req, res) => {
        console.log('Listening on port 1234');
    });
}

module.exports = start;
