var gulp = require('gulp');
var size = require('gulp-size');
var stripCode = require('gulp-strip-code');
var config = require('../../config.js').optimize.stripCode;

gulp.task('strip-code', function(){
  gulp.src(config.src)
    .pipe(stripCode(config.options))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
