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
        theme: 'bootstrap',
        jsonFile: options.htmlReport.jsonFile,
        output: options.htmlReport.output,
        reportSuiteAsScenarios: options.htmlReport.reportSuiteAsScenarios,
        launchReport: options.htmlReport.launchReport
    });
    cb();
}

function runChimp(optionsGulp, cb) {
    var options = require('./chimp.conf.js');
    if (typeof optionsGulp === 'object') {
        options.path = optionsGulp.features;
        options.browser = optionsGulp.browser;
        options.singleRun = optionsGulp.singleRun;
        options.debug = optionsGulp.debug;

        options.screenshotsPath = optionsGulp.output.screenshotsPath;
        options.jsonOutput = optionsGulp.output.jsonOutput;

        options.htmlReport = optionsGulp.htmlReport.enable;
        options.jsonFile = optionsGulp.htmlReport.jsonFile;
        options.output = optionsGulp.htmlReport.output;
        options.reportSuiteAsScenarios = optionsGulp.htmlReport.reportSuiteAsScenarios;
        options.launchReport = optionsGulp.htmlReport.launchReport;
    } else {
        var configFile = path.resolve(process.cwd() + '/' + optionsGulp);
        options = require(configFile);
    }
    options._ = ['./node_modules/.bin/chimp.js'];
    var chimp = new Chimp(options);
    if (options.singleRun) {
        chimp.run(function (err) {
            if (err) {
                console.log(err);
            }
            cb();
        });
    } else {
        chimp.init(function (err) {
            if (err) {
                console.log(err);
            }
            cb();
        });
    }
}

function init(options) {
    if (options === undefined) {
        throw new gutil.PluginError(PLUGIN_NAME, 'Options is required!');
    } else {
        if (typeof options === 'object') {
            async.series([
                function (cb) {
                    createOutputFolder(options.pathOutput, cb);
                },
                function (cb) {
                    runChimp(options, cb);
                },
                function (cb) {
                    if (options.htmlReport.enable) {
                        createCucumberReport(options, cb);
                    } else {
                        cb();
                    }
                }
            ]);
        } else {
            async.series([
                function (cb) {
                    createOutputFolder(options.pathOutput, cb);
                },
                function (cb) {
                    runChimp(options, cb);
                },
                function (cb) {
                    options = require(path.resolve(process.cwd() + '/' + options));
                    if (options.htmlReport.enable) {
                        createCucumberReport(options, cb);
                    } else {
                        cb();
                    }
                }
            ]);
        }
    }
}

module.exports = init;
