var gulp = require('gulp');

gulp.task('set-production', function() {
  process.env.NODE_ENV = 'production';
});
