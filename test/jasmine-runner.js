var Jasmine = require('jasmine');
var jasmine = new Jasmine();

jasmine.loadConfigFile('./test/support');

console.log(jasmine);
jasmine.configureDefaultReporter({
    showColors: false
});
jasmine.execute();