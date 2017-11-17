
const { findPostUser } = require('../../../../../service/api/user/find'),
    { resJsonP } = require('../../../../../utils');

module.exports = () => (req, res) => {
    const obj = req.body;
    findPostUser(obj).then((result) => resJsonP(res, 200, result.status, !result.msg ? result.resulObj : res.__(result.msg)))
        .catch((err) => resJsonP(res, 200, false, res.__(err.message)));
};