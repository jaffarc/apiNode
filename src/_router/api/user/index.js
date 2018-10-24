const router = require('express').Router();

module.exports = () => {
    /**
     * @api {get} /find/user/:id find user get
     * @apiName findget
     * @apiGroup Find
     * @apiVersion 1.0.0
     * @apiDescription find user for id
     * @apiHeaderExample {json} Header-Example:
     *     {
     *       content-type: 'application/json',
     *       Authorization : "JWT token"
     *     }
     * @apiHeader Authorization Basic Access Authentication token.
     * @apiHeader Content-Type application/json
     * @apiSuccess {Object} sucesso <code>true</code>
     * @apiSuccess {string} retorno User successfully registered
     * @apiError {Object} sucesso <code>false</code>
     * @apiError {string} retorno  There was an error in registering || E-mail already registered
     * @apiExample {curl} Example utilizando plugin Testing API:
     *   {
     *       method: 'POST',
     *       url: 'http://localhost:5000/find/user/id',
     *       requestHeader: {
     *           'content-type': 'application/json',
     *           Authorization : "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
     *       }
     *   }
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *       {
     *           "sucesso": true,
     *            "retorno": " User successfully registered"
     *       }
     * @apiErrorExample {json} Token-Invalido:
     *     HTTP/1.1 404 Not Found
     *     {
     *       Unauthorized
     *     }
     * @apiErrorExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *       {
     *           "sucesso": false,
     *            "retorno": "There was an error in registering "
     *       }
     * @apiErrorExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *       {
     *           "sucesso": false,
     *            "retorno": " E-mail already registered "
     *       }
    **/
    const findGetUserController = require('./get')();
    router.get('/find/user/:id', findGetUserController);

    /**
     * @api {post} /find/user find user post
     * @apiName findpost
     * @apiGroup Find
     * @apiVersion 1.0.0
     * @apiDescription find user for id
     * @apiHeaderExample {json} Header-Example:
     *     {
     *       content-type: 'application/json',
     *       Authorization : "JWT token"
     *     }
     * @apiHeader Authorization Basic Access Authentication token.
     * @apiHeader Content-Type application/json
     * @apiSuccess {Object} sucesso <code>true</code>
     * @apiSuccess {string} retorno User successfully registered
     * @apiError {Object} sucesso <code>false</code>
     * @apiError {string} retorno  There was an error in registering || E-mail already registered
     * @apiExample {curl} Example utilizando plugin Testing API:
     *   {
     *       method: 'GET',
     *       url: 'http://localhost:5000/find/user/id',
     *       requestHeader: {
     *           'content-type': 'application/json',
     *           Authorization : "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
     *       }
     *   }
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *       {
     *           "sucesso": true,
     *            "retorno": " User successfully registered"
     *       }
     * @apiErrorExample {json} Token-Invalido:
     *     HTTP/1.1 404 Not Found
     *     {
     *       Unauthorized
     *     }
     * @apiErrorExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *       {
     *           "sucesso": false,
     *            "retorno": "There was an error in registering "
     *       }
     * @apiErrorExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *       {
     *           "sucesso": false,
     *            "retorno": " E-mail already registered "
     *       }
    **/
    const findPostUserController = require('../user/post')();
    router.post('/user', findPostUserController);
    return router;
};





// module.exports = (app) => {

//     require('./api')(app);

//     return false;
// };

