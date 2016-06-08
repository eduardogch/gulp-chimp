var path = require('path');
var spawn = require('child_process').spawn;
var chimpPath = path.resolve(process.cwd() + '/node_modules/.bin/chimp');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;

// Consts
const PLUGIN_NAME = 'gulp-chimp';

function gulpChimp() {
    var args = [];
    var chimp = spawn(chimpPath, args);

    chimp.stdout.on('data', function(data) {
      process.stdout.write(data.toString());
    });

    chimp.stderr.pipe(process.stdout);
}

gulpChimp();

var index = {
    gulpChimp: gulpChimp
};

module.exports = index;
