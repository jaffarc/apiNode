const express = require('express'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  i18n = require('i18n'),
  app = express();

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV }`
});

app.set('port', (process.env.PORT || 3080));

app.use((req, res, next) => {
  const _send = res.send;
  let sent = false;
  res.send = function (data) {
    if (sent) return;
    _send.bind(res)(data);
    sent = true;
  };
  res.setHeader('Content-Security-Policy', 'script-src "self" https://apis.google.com');
  next();
});

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  //res.header('Access-Control-Allow-Origin', req.headers.host);
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Headers', 'Content-type, Accept, Authorization');
  //console.log('IP: ', req.connection.remoteAddress);
  next();
});

i18n.configure({
  locales: ['br', 'en'],
  directory: __dirname + '/locales',
  register: global,
});
app.disable('x-powered-by');
app.use(
  i18n.init,
  morgan('dev'),
  bodyParser.json({ limit: '1000MB', extended: true }),
  bodyParser.urlencoded({ limit: '1000MB', extended: true })
);
/** @description inicia o modulo de passaport jwt*/
require('./src/service/passaport')();

require('./src/router')(app);

console.log(process.env.DB_HOST);

module.exports = app;

