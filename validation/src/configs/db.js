const mongoose = require('mongoose');

const connect  = () => {
    return mongoose.connect('mongodb://localhost:1235/validatorn');
}

module.exports = connect;
