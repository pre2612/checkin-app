var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('../../config').browsersync;

/**
 * Run the build task and start a server with BrowserSync
 */
gulp.task('browserSync', ['build'], function() {
  browserSync(config);
});
