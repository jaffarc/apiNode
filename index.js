const server = require('./server'),
    port = process.env.PORT || 5000;

require('./src/router')(server);


server.listen(port, () => {
    console.log('Server running on port %d', port);
});