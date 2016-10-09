const gutil = require('gulp-util');
const async = require('async');
const path = require('path');
const fs = require('fs');
const Chimp = require('chimp');
const PLUGIN_NAME = 'gulp-chimp';

function createOutputFolder(pathOutput, cb) {
    var e2eOutput = path.resolve(process.cwd() + pathOutput);
    if (!fs.existsSync(e2eOutput)) {
        fs.mkdirSync(e2eOutput);
        fs.mkdirSync(e2eOutput + '/logs');
        fs.mkdirSync(e2eOutput + '/screenshots');
    }
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
        options.port = optionsGulp.port;
    } else {
        var configFile = path.resolve(process.cwd() + optionsGulp);
        options = require(configFile);
    }

    var chimp = new Chimp(options);
    chimp.run(function () {
        cb();
        if (options.singleRun || options.singleRun === 'undefined') {
            process.exit(1);
        }
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
