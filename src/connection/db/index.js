const mongoose = require('mongoose');

/**
 * connection mongo all data base.
 * @module connection/mongo
 */
exports.db = async (app) => {
    try {

        let mongoUrl = `mongodb://${app.get('MONGO_HOST')}:${app.get('MONGO_PORT')}/${app.get('MONGO_DB')}`;
        //let mongoUrl = 'mongodb://localhost/test'
        mongoose.Promise = global.Promise;
        //  console.log(mongoose.createConnection())

        /**
         * makes the connection to the main database.
         * @param {string} mongoUrl - The connection string declared at the beginning of the file.
         * @return {Object} returns the connection object data Base estudo.
         */
        return mongoose.connect(mongoUrl, { keepAlive: 300000, connectTimeoutMS: 30000, useMongoClient: true })
            .then(() => {
                require('../../schema/api')(mongoose);
                return mongoose
            })
            .catch(err => console.error(err));
        /**
         * loads all schemas for this connection.
         * @readonly
        */

    } catch (error) {
        console.log('conexao db %d', error);
        throw error;
    }
};


exports.dblog = (app) => {
    try {

        let mongoLog = `mongodb://${app.get('MONGO_HOST_LOG')}:${app.get('MONGO_PORT_LOG')}/${app.get('MONGO_DB_LOG')}`;
        mongoose.Promise = global.Promise;
        let dbLog = mongoose;


        /**
         * makes the connection to the main database.
         * @param {string} mongoUrl - The connection string declared at the beginning of the file.
         * @return {Object} returns the connection object data Base log.
         */
        require('../../schema/log')(dbLog);
        return dbLog.createConnection(mongoLog, { keepAlive: 300000, connectTimeoutMS: 30000, useMongoClient: true });

    } catch (error) {
        console.log('dblog', error);
        throw error;
    }

};