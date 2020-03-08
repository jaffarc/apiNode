module.exports = app => {

  const LoginController = require('./api/user/')();
  app.use('/api', LoginController);

  app.use((req, res) => res.status(404).json({ message: 'Method not found 404' }));

};