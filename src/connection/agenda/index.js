module.exports = async (app) => {
    await require('../db').db(app).then((status) => {

        console.log(`Mongoose connection mongo opened ${app.get('MONGO_DB')} in ${app.get('MONGO_HOST')} pid:${process.pid}`);
        global.db = status;
    }).catch(err => {
        console.log('err', err);
        throw err;
    });
};

