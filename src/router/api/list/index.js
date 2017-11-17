const router = require('express').Router();

module.exports = () => {
    const registerUserController = require('../list/user')();
    router.get('/user', registerUserController);
    return router;
};






