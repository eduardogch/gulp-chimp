describe('Test index.js', function() {
    var index = require('../index.js');

    it('should exist a function in index.js', function() {
        index.should.be.Function();
    });
});
