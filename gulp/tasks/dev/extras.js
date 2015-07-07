var gulp = require('gulp');
var config = require('../../config.js').extras;
var size = require('gulp-size');

gulp.task('extras', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
