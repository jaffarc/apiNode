const server = require('./server'),
    port = process.env.PORT || 5000;

/**
 * @description inicia o modulo de passaport jwt
 */
require('./src/service/passaport')();

require('./src/router')(server);


server.listen(port, () => {
    console.log('Server running on port %d', port);
});