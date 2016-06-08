describe('gulp-chimp', function() {
    var gulpChimp = require('../index.js');

    it('should exist a function named Hello World', function() {
        gulpChimp.helloWorld.should.be.Function();
    });

});
