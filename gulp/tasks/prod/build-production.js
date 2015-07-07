var gulp = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build:production', function(callback) {
  runSequence('clean', [
      'html',
      'sass',
      'strip-code',
      'images',
      'fonts',
      'extras'
    ],
    'base64', [
      'optimize:css',
      'optimize:js',
      'optimize:images',
      'optimize:html',
    ],
    'revision',
    'rev:collect',
    callback);
});
