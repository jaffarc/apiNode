const mongoose = require('mongoose');
const config = require('../../config/bd');


let dbPrincipal = 'test';
const createConnection = (name) => {
    mongoose.Promise = Promise;
    let options = {
        keepAlive: 300000,
        connectTimeoutMS: 0,
        reconnectTries: 30,
        useNewUrlParser: true,
        useCreateIndex: true,

    };

    console.log('BANCO', name);

    let mongoUrl = `mongodb://${config[name].MONGO_USER}:${config[name].MONGO_PWD}@${config[name].MONGO_HOST}:${config[name].MONGO_PORT}/${config[name].MONGO_DB}?authSource=${config[name].MONGO_DB}&authMechanism=SCRAM-SHA-1`;

    console.log('BANCOURL', mongoUrl);
    let db = mongoose.createConnection(mongoUrl, options);


    return db;
};

module.exports = createConnection(dbPrincipal);

module.exports.on = createConnection;


