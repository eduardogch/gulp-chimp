var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var chimp = require('./index.js');

/* Chimp.js - Automated Testing without Options */
gulp.task('chimp', function () {
    return chimp('./chimp.conf.js');
});

/* Chimp.js - Automated Testing with Options */
gulp.task('chimp-options', function () {
    return chimp({
        path: './source/e2e/spec',
        log: 'verbose',
        timeout: 6000,
        env: 'development'
    });
});

/* Start express.js server for testing */
gulp.task('start', function () {
    nodemon({
        script: './source/app/server.js',
        ext: 'js html',
        env: {
            'NODE_ENV': 'development'
        }
    });
});
