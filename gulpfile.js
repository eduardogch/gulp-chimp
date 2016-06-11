var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var chimp = require('./index.js');

/* Chimp.js - Automated Testing with config file */
gulp.task('chimp', function () {
    return gulp.src('e2e/test.spec.js')
        .pipe(chimp('chimp.conf.js'));
});

/* Chimp.js - Automated Testing simple Options */
gulp.task('chimp-options', function () {
    return gulp.src('e2e/test.spec.js')
        .pipe(chimp([options]));
});

/* Start express.js server for testing */
gulp.task('start', function () {
  nodemon({
    script: './source/app/server.js',
    ext: 'js html',
    env: { 'NODE_ENV': 'development' }
  });
});
