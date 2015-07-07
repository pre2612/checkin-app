var gulp = require('gulp');
var config = require('../../config.js').html;
var size = require('gulp-size');
var useref = require('gulp-useref');

gulp.task('html', function() {
  var assets = useref.assets();
  return gulp.src(config.src)
    .pipe(assets)
    .pipe(assets.restore())
    .pipe(useref())
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
