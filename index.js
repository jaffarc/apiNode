const server = require('./server');

server.listen(server.get('port'), () => {
  console.log('Server running on port %d', server.get('port'));
});