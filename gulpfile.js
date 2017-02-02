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
        features: './source/e2e/features',
        browser: 'phantomjs',
        singleRun: true,
        debug: false,
        output: {
            screenshotsPath: './e2e_output/screenshots',
            jsonOutput: './e2e_output/cucumber.json',
        },
        htmlReport: {
            enable: true,
            jsonFile: './e2e_output/cucumber.json',
            output: './e2e_output/report/cucumber.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
        }
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

gulp.task('default', (callback) => {
    runSequence(
        'nodemon',
        'browser-sync',
        callback
    );
});
