'use strict';

require('../../../index');
var supertest = require('supertest')('http://localhost:5000');


jasmine.getEnv().defaultTimeoutInterval = 50000;

describe('USER', () => {
    describe('POST /users', () => {
        it('respond with json', (done) => {
            supertest
                .post('/register/user')
                .send({ 'email': 'test@api.com' })
                .set('Accept', 'application/json')
                .set('Accept-Language', 'br')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        return done.fail(err);
                    }
                    console.log(res.body);
                    done();

                });
        },1000);

        it('should respond with json', function (done) {
            supertest
                .get('/list/user')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) => {
                    console.log(err);
                    console.log(res.body);
                    done();
                });
        });
    });

});


// {
//     method: 'POST',
//     url: 'http://localhost:5000/register/user',
//     requestHeader: {
//         'content-type': 'application/json'
//     },
//     requestBody: {
//         'email': 'eu@gmail.com'

//     }
// }
