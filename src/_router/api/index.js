
module.exports = (app) => {

    app.use('/register', require('./register')());

    app.use('/list', require('./list')());

    app.use('/find', require('./find')());
};

