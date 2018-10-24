
const { findUser } = require('../../../../service/api/user/find'),
    { resJsonP } = require('../../../../utils');

module.exports = () => (req, res) => {
    findUser().then(result => resJsonP(res, 200, result.status, !result.msg ? result.resulObj : res.__(result.msg)))
        .catch(err => resJsonP(res, 200, false, res.__(err.message)));
};