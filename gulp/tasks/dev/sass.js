var gulp = require('gulp');
var plumber = require('gulp-plumber');
var util = require('gulp-util');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var gulpFilter = require('gulp-filter');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var handleErrors = require('../../util/handleErrors');
var config = require('../../config');

/**
 * Generate CSS from SCSS
 * Build sourcemaps
 */

gulp.task('sass', function(callback) {
  var sassConfig = config.sass.options;

  // Don’t write sourcemaps of sourcemaps
  var filter = gulpFilter(['*.css', '!*.map']);

  browserSync.notify('Compiling Sass');

  return gulp.src(config.sass.src)
    .pipe(plumber({
      errorHandler: handleErrors
    }))
    .pipe(sourcemaps.init())
    .pipe(sass(sassConfig))
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(filter) // Don’t write sourcemaps of sourcemaps
    .pipe(sourcemaps.write(config.sass.maps))
    .pipe(filter.restore()) // Restore original files
    .pipe(gulp.dest(config.sass.dest));
});
