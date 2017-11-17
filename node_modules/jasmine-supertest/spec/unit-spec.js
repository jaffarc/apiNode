var finishTestcase = require('../index.js');

describe('jasmine-supertest unit tests', function() {
    it('returns a function', function() {
		var actual = finishTestcase();
		expect(actual).toEqual(jasmine.any(Function));
    });


	describe('test success', function() {
		it('calls the done function exactly once without any parameter', function() {
			var done = jasmine.createSpy('done callback');
			var actual = finishTestcase(done);

			actual();

			expect(done).toHaveBeenCalledTimes(1);
			expect(done).toHaveBeenCalledWith();
		});
	});

	describe('test failure', function() {
		it('calls the done.fail function exactly once with error message', function() {
			var done = jasmine.createSpy('done callback');
			done.fail = jasmine.createSpy('done fail callback');
			var actual = finishTestcase(done);
			var errorMessage = 'Chicken fingers... with spicy club sauce.';

			actual(errorMessage);

			expect(done).not.toHaveBeenCalled();
			expect(done.fail).toHaveBeenCalledTimes(1);
			expect(done.fail).toHaveBeenCalledWith(errorMessage);
		});
	});
});