const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const chimp = require('./index.js');
const runSequence = require('run-sequence');
const browserSync = require('browser-sync');

/* Chimp.js - Automated Testing without Options */
gulp.task('chimp', () => {
    return chimp('chimp.conf.js');
});

/* Chimp.js - Automated Testing with Options */
gulp.task('chimp-options', () => {
    return chimp({
        path: './source/e2e/features',
        browser: 'phantomjs',
        pathOutput: '/e2e_output',
        debug: true,
        singleRun: false,
        log: 'info',
        timeout: 60000,
        port: 2345,
        htmlReport: true
    });
});

/* Start express.js server for testing */
gulp.task('nodemon', () => {
    nodemon({
        script: './source/app/server.js',
        ext: 'js html',
        env: {
            'NODE_ENV': 'development'
        }
    });
});

/* Start up browser syncing for local dev */
gulp.task('browser-sync', function () {
    browserSync({
        proxy: 'localhost:3000',
        port: 3001,
        notify: true,
        open: 'external'
    });
});

gulp.task('default', () => {
    runSequence(
        'nodemon',
        'browser-sync'
    );
});
