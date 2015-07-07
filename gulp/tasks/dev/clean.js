var gulp = require('gulp');
var del = require('del');
var config = require('../../config').clean;

/**
 * Clean up folders and files
 */
gulp.task('clean', function(callback) {
  del(config.src, callback);
});
