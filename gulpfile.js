var gulp = require('gulp');
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
