var path = require('path');
var exec = require('child_process').exec;
var chimpPath = path.resolve(process.cwd() + '/node_modules/.bin/chimp');

function init(config) {
    var command = chimpPath + " " + config;
    var chimp = exec(command);
    chimp.stdout.on('data', function(data) {
        process.stdout.write(data);
    });
}

var chimp = {
    init: init
};

module.exports = chimp;
