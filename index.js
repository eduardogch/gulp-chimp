var gutil = require('gulp-util');
var path = require('path');
var fs = require('fs');
var exec = require('child_process').exec;
var async = require("async");

var PLUGIN_NAME = 'gulp-chimp';
var PluginError = gutil.PluginError;
var chimpPath = path.resolve(process.cwd() + '/node_modules/.bin/chimp');

function someBodyShouldDoSomething(options) {
    if (options === undefined) {
        throw new gutil.PluginError(PLUGIN_NAME, 'Options is required!');
    }
}

function createOutputFolder(pathOutput) {
    var e2eOutput = path.resolve(process.cwd() + pathOutput);
    if (!fs.existsSync(e2eOutput)) {
        fs.mkdirSync(e2eOutput);
        fs.mkdirSync(e2eOutput + "/logs");
        fs.mkdirSync(e2eOutput + "/screenshots");
    }
}

function initChimp(options) {
    var chimp = exec(chimpPath + " " + options);
    chimp.stdout.on('data', function (data) {
        process.stdout.write(data);
    });
}

var index = {
    initChimp: initChimp,
    createOutputFolder: createOutputFolder,
    someBodyShouldDoSomething: someBodyShouldDoSomething
};

module.exports = function (options) {
    async.series([
        function (cb) {
            someBodyShouldDoSomething(options);
            cb();
        },
        function (cb) {
            createOutputFolder('/source/output');
            cb();
        },
        function (cb) {
            initChimp(options);
            cb();
        }
    ]);
};
