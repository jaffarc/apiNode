/**
 * Biblioteca para funções úteis no sistema
 *
 * @module Library/Utils
 */
const mongoose = require('mongoose'),
    request = require('request');


exports.ObjectIdCast = mongoose.mongo.ObjectId;

/**
* Função para padronizar o retorno e deixar ele mais fácil de ser escrito
* @param {object} res [objeto da requisição que esta sendo recebida]
* @param {number} code [código que será enviado na resposta]
* @param {boolean} sucesso [true/false que será enviado na resposta]
* @param {object} retorno [Objeto, texto ou erro que será enviado no retorno da resposta]
* @return resposta da requisição (res.status....)
*/
exports.resJsonP = (res, code, sucesso, retorno) => res.status(code).jsonp({ success: sucesso, return: retorno });

/**
* Função The Default Error Handler para tratar error do mongodb
* @param {object} error object com lista de erro
* @return {boolena} retorna se tiver erro do mongodb
* @return {number} retorna se nao tiver erro do mongodb
*/
exports.responseHandler = (error) => {
    let options = {
        method: 'post',
        body: {
            'metadata': {
                'title': '/api/register/user',
                'type': 'error',
                'icon': 'fa-bug'
            },
            'body': {
                'error': error,
                'error_description': error.errmsg
            }
        },
        json: true,
        url: 'http://localhost:4000/api/log/default',
        headers: {
            'Accept': 'application/json'
        }
    };

    request(options, function (err) {
        if (err) {
            console.log('Error :', err);
            return false;
        }
    });
    if (error.code === 11000) {
        let keyErrorRegex = /duplicate key error index:\s+(.+?)\s+/g;
        if (!keyErrorRegex.exec(error.err)) {
            return 0;
        }
        return 0;
    }
    return false;
};



