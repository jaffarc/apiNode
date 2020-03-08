require('dotenv').config({
  path: process.env.NODE_ENV === 'developer' ? '.env.developer' : '.env'
});

const chai = require('chai'),
  app = require('../server'),
  request = require('supertest');

let expect = chai.expect;

require('./user')(expect, request, app);

// chai.use(chaiHttp);
// chai.assert;
// global.tokenResponsavel;
// global.tokenProf;
// global.tokenEscola;

//require('./hooks')();



// require('./login')(expect, request, app);
//require('./repository/professor')(expect, request, app);


