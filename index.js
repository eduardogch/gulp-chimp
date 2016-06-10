var through = require('through2');
var gutil = require('gulp-util');

var PLUGIN_NAME = 'gulp-chimp';
var PluginError = gutil.PluginError;
var chimp = require('./source/chimp.js');

function someBodyShouldDoSomething(file) {
    if (file.isNull()) {
        throw new gutil.PluginError(PLUGIN_NAME, 'Options is required!');
    }
}

module.exports = function (options) {
    if (options === undefined) {
        throw new gutil.PluginError(PLUGIN_NAME, 'Options is required!');
    }
    chimp.init(options);
    return through.obj(function (file, encoding, callback) {
        callback(null, someBodyShouldDoSomething(file));
    });
};
