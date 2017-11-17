// Implementation based on https://github.com/jasmine/jasmine-npm/issues/31#issuecomment-125953251

var finishTestcase = function(done) {
	return function(error) {
		if (error) {
			done.fail(error);
		} else {
			done();
		}
	}
};

module.exports = finishTestcase;