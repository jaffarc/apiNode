var server = require('./support/server');
var supertest = require('supertest');
var finishTestcase = require('../index.js');

describe('jasmine-supertest test suite', function() {
	beforeEach(function() {
	    this.app = supertest(server);
	});

    it('calls done without any params and finishes the test case is fine', function(done) {
		var doneMock = jasmine.createSpy('done callback').and.callFake(function (errorMessage) {
			expect(errorMessage).toBeUndefined();
			done();
		});
		this.app.get('/incorrect-url').expect(404).end(finishTestcase(doneMock));
    });

	it('calls done.fail if there is an error', function(done) {
		var doneMock = {};
		doneMock.fail = jasmine.createSpy('done.fail spy').and.callFake(function (errorMessage) {
			var expectedError = new Error('expected 200 "OK", got 404 "Not Found"');
			expect(errorMessage).toEqual(expectedError);
			done();
		});

		this.app.get('/incorrect-url').expect(200).end(finishTestcase(doneMock));
	});
});