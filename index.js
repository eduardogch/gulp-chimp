var path = require('path');
var spawn = require('child_process').spawn;
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var chimpPath = path.resolve(process.cwd() + '/node_modules/.bin/chimp');

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

// Start Function just for development
if (process.mainModule.filename.indexOf("node_modules") === -1) {
    gulpChimp();
}

var index = {
    gulpChimp: gulpChimp
};

module.exports = index;
