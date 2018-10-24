
const { removeUser } = require('../../../../service/api/user/remove'),
    { resJsonP } = require('../../../../utils');

module.exports = () => (req, res) => {
    const id = req.body.id;
    removeUser(id).then(result => resJsonP(res, 200, result.status, !result.msg ? result.resulObj : res.__(result.msg)))
        .catch(err => resJsonP(res, 200, false, res.__(err.message)));
};