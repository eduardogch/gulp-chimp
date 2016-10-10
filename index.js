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

function createCucumberReport(cb) {
    reporter.generate({
        theme: 'bootstrap',
        jsonFile: 'e2e_output/cucumber.json',
        output: 'e2e_output/report/cucumber.html',
        reportSuiteAsScenarios: true,
        launchReport: false
    });
    cb();
}

function runChimp(optionsGulp, cb) {
    var options = require('./chimp.conf.js');
    options._ = ['./node_modules/.bin/chimp.js'];

    if (typeof optionsGulp === 'object') {
        options.path = optionsGulp.path;
        options.browser = optionsGulp.browser;
        options.log = optionsGulp.log;
        options.timeout = optionsGulp.timeout;
        options.singleRun = optionsGulp.singleRun;
        options.port = optionsGulp.port;
    } else {
        var configFile = path.resolve(process.cwd() + optionsGulp);
        options = require(configFile);
    }

    var chimp = new Chimp(options);
    chimp.run(function () {
        async.series([
            function (cb) {
                createCucumberReport(cb);
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
