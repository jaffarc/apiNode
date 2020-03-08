
const { findUserByName } = require('../../../../service/api/user/find'),
  { resJsonP } = require('../../../../utils');

module.exports = () => (req, res) => {
  const obj = req.body;
  findUserByName(obj).then(result => resJsonP(res, 200, true, result))
    .catch((err) => resJsonP(res, 200, false, res.__(err.message)));
};