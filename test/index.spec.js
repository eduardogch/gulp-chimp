describe('Test index.js', function() {
    var chimp = require('../index.js');

    it('should exist a function in chimp', function() {
        chimp.should.be.Function();
    });
});
