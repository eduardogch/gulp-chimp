describe('Test chimp.js', function() {
    var chimp = require('../source/chimp.js');

    it('should exist a function in init', function() {
        chimp.init.should.be.Function();
    });
});
