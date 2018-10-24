module.exports = (app) => {
    /**
     * @apiDefine VersionAPI Versão da API
     *
     * @apiVersion 2.0.0
     */

    const AlternarPerfilController = require('./api/user/')();
    app.use('/api/', AlternarPerfilController);

};