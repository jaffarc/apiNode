const { AwesomeReport } = require('jasmine-awesome-report');
var Jasmine = require('jasmine');
var jasmine = new Jasmine();


const config = {
    fullPath: 'awesome-report',
    fileName: 'report',
    merge: true
};


jasmine.loadConfigFile('./test/support');

console.log(jasmine);
jasmine.configureDefaultReporter({
    showColors: false
});
jasmine.getEnv().addReporter(AwesomeReport.getReport(config));
jasmine.execute();