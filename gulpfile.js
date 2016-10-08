const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const chimp = require('./index.js');

/* Chimp.js - Automated Testing without Options */
gulp.task('chimp', ['start'], () => {
    return chimp('./chimp.conf.js');
});

/* Chimp.js - Automated Testing with Options */
gulp.task('chimp-options', ['start'], () => {
    return chimp({
        path: './source/e2e/specs/',
        browser: 'chrome',
        debug: true,
        log: 'info',
        timeout: 60000,
        port: 2345
    });
});

/* Start express.js server for testing */
gulp.task('start', () => {
    nodemon({
        script: './source/app/server.js',
        ext: 'js html',
        env: {
            'NODE_ENV': 'development'
        }
    });
});
