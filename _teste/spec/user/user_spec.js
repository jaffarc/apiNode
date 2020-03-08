'use strict';

require('../../../index');
let  supertest = require('supertest')('http://localhost:5000');
let grand = require('grand');


jasmine.getEnv().defaultTimeoutInterval = 50000;

describe('USER', () => {
    describe('POST /users', () => {
        it('respond with json', (done) => {
            supertest
                .post('/api/register/user')
                .send({
                    'email': grand.emailAddress(),
                    'password': grand.word(10)
                })
                .set('Accept', 'application/json')
                .set('Accept-Language', 'br')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        console.log(err);
                    }
                    done();

                });
        }, 1000);

        it('should respond with json', (done) => {
            supertest
                .get('/api/list/user')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) => {
                    //console.log(err);
                    //console.log(res.body);
                    done();
                });
        });
    });

});


