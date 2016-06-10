var path = require('path');
var spawn = require('child_process').spawn;
var gutil = require('gulp-util');
var through = require('through2');

var PluginError = gutil.PluginError;
var chimpPath = path.resolve(process.cwd() + '/node_modules/.bin/chimp');
var PLUGIN_NAME = 'gulp-chimp';

function chimp() {
    var args = [];
    var chimp = spawn(chimpPath, args);
    chimp.stdout.on('data', function(data) {
        process.stdout.write(data.toString());
    });
    chimp.stderr.pipe(process.stdout);
}

module.exports = function(options) {

    if (options.host === undefined) {
        throw new gutil.PluginError(PLUGIN_NAME, '`host` is required!');
    }

    return through.obj(function(file, enc, cb) {
        if (file.isNull()) {
            cb(null, file);
            return;
        }

        if (file.isStream()) {
            cb(new gutil.PluginError(PLUGIN_NAME, 'Streaming not supported!'));
            return;
        }

        chimp();

    }, function(cb) {
        gutil.log(PLUGIN_NAME + ": ", gutil.colors.green('good'));
        cb();
    });
};
