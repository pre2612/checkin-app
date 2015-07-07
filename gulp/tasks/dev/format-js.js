var gulp = require('gulp');
var prettify = require('gulp-jsbeautifier');
var config = require('../../config.js').formatting.js;

gulp.task('format-js', function() {
  gulp.src(config.src)
    .pipe(prettify({
      config: '.jsbeautifyrc',
      mode: 'VERIFY_AND_WRITE'
    }))
    .pipe(gulp.dest(config.dest));
});
