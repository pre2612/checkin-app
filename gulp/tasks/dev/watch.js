var gulp = require('gulp');
var config = require('../../config.js').watch;
/**
 * Start browsersync task and then watch files for changes
 */
gulp.task('watch', ['browserSync'], function() {
  gulp.watch(config.html, ['html']);
  gulp.watch(config.sass, ['sass']);
  gulp.watch(config.images, ['images']);
  gulp.watch(config.fonts, ['fonts']);
  gulp.watch(config.extras, ['extras']);
});
