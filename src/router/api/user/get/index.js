
const { findUser } = require('../../../../service/api/user/find'),
  { resJsonP } = require('../../../../utils');

module.exports = () => (req, res) => {
  findUser()
    .then(result => resJsonP(res, 200, true, result))
    .catch(err => resJsonP(res, 200, true, err));
};