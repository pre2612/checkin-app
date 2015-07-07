var gulp = require('gulp');
var config = require('../../config.js').fonts;
var size = require('gulp-size');

gulp.task('fonts', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
