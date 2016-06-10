var gulp = require('gulp');
var chimp = require('./index.js');

/* Chimp.js - Automated Testing without options file*/
gulp.task('chimp', function() {
    return gulp.src('e2e/test.spec.js')
        .pipe(chimp({
            host: 'localhost'
        }));
});

/* Chimp.js - Automated Testing with options file*/
gulp.task('chimp-options', function() {
    return gulp.src('e2e/test.spec.js')
        .pipe(chimp([options]));
});
