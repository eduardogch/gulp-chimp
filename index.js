const gutil = require('gulp-util');
const async = require('async');
const path = require('path');
const fs = require('fs');
const Chimp = require('chimp');
const reporter = require('cucumber-html-reporter');
const PLUGIN_NAME = 'gulp-chimp';

function createOutputFolder(pathOutput, cb) {
    var e2eOutput = path.resolve(process.cwd() + pathOutput);
    if (!fs.existsSync(e2eOutput)) {
        fs.mkdirSync(e2eOutput);
        fs.mkdirSync(e2eOutput + '/logs');
        fs.mkdirSync(e2eOutput + '/report');
        fs.mkdirSync(e2eOutput + '/screenshots');
    }
    cb();
}

function createCucumberReport(options, cb) {
    reporter.generate({
        theme: (options.theme) ? options.theme : 'bootstrap',
        jsonFile: (options.jsonFile) ? options.jsonFile : 'e2e_output/cucumber.json',
        output: (options.output) ? options.output : 'e2e_output/report/cucumber.html',
        reportSuiteAsScenarios: (options.reportSuiteAsScenarios) ? options.reportSuiteAsScenarios : true,
        launchReport: (options.launchReport) ? options.launchReport : true
    });
    cb();
}

function runChimp(optionsGulp, cb) {
    var options = require('./chimp.conf.js');
    if (typeof optionsGulp === 'object') {
        options.path = optionsGulp.path;
        options.browser = optionsGulp.browser;
        options.log = optionsGulp.log;
        options.timeout = optionsGulp.timeout;
        options.singleRun = optionsGulp.singleRun;
        options.port = optionsGulp.port;
        options.reportHTML = optionsGulp.reportHTML;
    } else {
        var configFile = path.resolve(process.cwd() + '/' +optionsGulp);
        options = require(configFile);
    }
    options._ = ['./node_modules/.bin/chimp.js'];

    var chimp = new Chimp(options);
    chimp.run(function () {
        async.series([
            function (cb) {
                if (options.reportHTML) {
                    createCucumberReport(options, cb);
                }
            },
            function () {
                if (options.singleRun) {
                    process.exit(1);
                }
            }
        ]);
        cb();
    });
}

function init(options) {
    if (options === undefined) {
        throw new gutil.PluginError(PLUGIN_NAME, 'Options is required!');
    } else {
        if (typeof options === 'object') {
            async.series([
                function (cb) {
                    createOutputFolder(options.output, cb);
                },
                function (cb) {
                    runChimp(options, cb);
                }
            ]);
        } else {
            async.series([
                function (cb) {
                    createOutputFolder('e2e_output', cb);
                },
                function (cb) {
                    runChimp(options, cb);
                }
            ]);
        }
    }
}

module.exports = init;
