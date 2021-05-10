const mongoose = require('mongoose');

mongoose.connect('mongodb://db:27017/crud-node-mongo-docker',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:false,
        autoIndex:false,
    },
);

const db = mongoose.connection;


module.exports = db;
