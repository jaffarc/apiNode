const requireLogin = require('passport').authenticate('local', { session: false }),
  router = require('express').Router();

module.exports = () => {

  router.get('/all/user', require('./get/')());

  router.post('/find/user', require('./post/')());
  return router;
};