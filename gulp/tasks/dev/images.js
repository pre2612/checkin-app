var gulp = require('gulp');
var changed = require('gulp-changed');
var size = require('gulp-size');
var config = require('../../config.js').images;

gulp.task('images', function() {
  return gulp.src(config.src)
    .pipe(changed(config.dest))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
