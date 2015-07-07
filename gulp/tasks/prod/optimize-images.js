var gulp = require('gulp');
var size = require('gulp-size');
var imagemin = require('gulp-imagemin');
var config = require('../../config.js').optimize.images;

gulp.task('optimize:images', function() {
  return gulp.src(config.src)
    .pipe(imagemin(config.options))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
