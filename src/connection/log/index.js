module.exports = async (app) => {
    await require('../db').dblog(app).then((status) => {
        console.log(`Mongoose connection mongo opened ${app.get('MONGO_DB_LOG')} in ${app.get('MONGO_HOST_LOG')} pid:${process.pid}`);
        global.log = status;
    }).catch(err => {
        console.log('err', err);
        throw err;
    });
};