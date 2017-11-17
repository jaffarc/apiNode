# jasmine-supertest
[![Build Status](https://travis-ci.org/djungowski/jasmine-supertest.svg?branch=master)](https://travis-ci.org/djungowski/jasmine-supertest)

Small library to ease the pain of using SuperTest in combination with Jasmine

If you use [Supertest](https://github.com/visionmedia/supertest) in combination with Jasmine, you cannot use the done callback out-of-the-box (see https://github.com/jasmine/jasmine-npm/issues/31). This library eases this pain.

## Installation
```bash
npm install jasmine-supertest
```

## Usage
jasmine-supertest simply adds a wrapper function you can use to finish SuperTest testcases. Instead of writing `.end(done)` you simply have to call `finishTestcase(done)`.

```javascript
var server = require('../lib/server');
var supertest = require('supertest');
var finishTestcase = require('jasmine-supertest');

describe('jasmine-supertest test suite', function() {
    it('calls done without any params and finishes the test case is fine', function(done) {
		    var app = supertest(server);
		    app.get('/incorrect-url').expect(404).end(finishTestcase(doneMock));
    });
});
```
