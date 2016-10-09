var should = require('should'),
    fs = require('fs'),
    path = require('path');

describe('Test index.js', function() {
    var chimp = require('../../index.js');
    it('should exist a function chimp object', function(done) {
        should.exist(chimp);
        done();
    });
});

describe('Test Files', function() {
    var pathDir = path.resolve(process.cwd() + '/source/e2e');
    it('Should exists a folder templates for features', function(done) {
        var dir = fs.existsSync(pathDir + '/features');
        dir.should.equal(true);
        done();
    });
    it('Should exists a folder templates for specs', function(done) {
        var dir = fs.existsSync(pathDir + '/specs');
        dir.should.equal(true);
        done();
    });
    it('Should exists a folder templates for page-objects', function(done) {
        var dir = fs.existsSync(pathDir + '/page-objects');
        dir.should.equal(true);
        done();
    });
});
