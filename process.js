const conf = require('./config');

/**
 * Set process env all aplication.
 * @module process/env
 */
module.exports = async (app) => {
    app.set('port', conf[process.env.NODE_ENV || 'dev'].PORT);
    app.set('MONGO_HOST', conf[process.env.MONGO_HOST || 'dev'].MONGO_HOST);
    app.set('MONGO_PORT', conf[process.env.MONGO_PORT || 'dev'].MONGO_PORT);
    app.set('MONGO_DB', conf[process.env.MONGO_DB || 'dev'].MONGO_DB);
    app.set('MONGO_HOST_LOG', conf[process.env.MONGO_HOST_LOG || 'dev'].MONGO_HOST_LOG);
    app.set('MONGO_PORT_LOG', conf[process.env.MONGO_PORT_LOG || 'dev'].MONGO_PORT_LOG);
    app.set('MONGO_DB_LOG', conf[process.env.MONGO_DB_LOG || 'dev'].MONGO_DB_LOG);

};