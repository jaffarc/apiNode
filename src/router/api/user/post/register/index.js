
const { registerUser } = require('../../../../../service/api/user/register'),
    { resJsonP } = require('../../../../../utils');

module.exports = () => (req, res) => {
    const obj = req.body;
    registerUser(obj).then((result) => resJsonP(res, 200, result.status, !result.msg ? result.resulObj : res.__(result.msg)))
        .catch((err) => resJsonP(res, 200, false, res.__(err.message)));
};