'use strict';

var src = 'src';
var build = 'build';

module.exports = {
  browsersync: {
    server: {
      baseDir: [
        build
      ]
    },
    host: 'localhost',
    port: 3000,
    files: [
      build + '/css/*.css',
      build + '/js/*.js',
      build + '/images/*',
      build + '/fonts/*'
    ]
  },
  sass: {
    src: src + '/sass/**/*.{sass,scss}',
    dest: build + '/css',
    maps: '../maps',
    options: {
      // place holder for mixins etc...
      // includePaths:['./node_modules/zurb-foundation-5/scss'],
    }
  },
  autoprefixer: {
    browsers: [
      'last 2 versions',
      'safari 5',
      'ie 8',
      'ie 9',
      'opera 12.1',
      'ios 6',
      'android 4'
    ],
    cascade: true
  },
  clean: {
    src: [build]
  },
  formatting: {
    js: {
      src: src + '/**/*.js',
      dest: src
    }
  },
  html: {
    src: src + '/*.html',
    dest: build
  },
  images: {
    src: src + '/images/**/*.{jpg,jpeg,png,gif}',
    dest: build + '/images'
  },
  fonts: {
    src: src + '/fonts/**/*',
    dest: build + '/fonts'
  },
  extras: {
    src: src + '/*.{txt,ico}',
    dest: build
  },
  base64: {
    src: build + '/css/*.css',
    dest: build + '/css',
    options: {
      baseDir: build,
      extensions: ['png'],
      maxImageSize: 20 * 1024, // bytes
      debug: false
    }
  },
  optimize: {
    css: {
      src: build + '/css/*.css',
      dest: build + '/css/',
      options: {
        keepSpecialComments: 0
      }
    },
    js: {
      src: build + '/js/*.js',
      dest: build + '/js/',
      options: {}
    },
    images: {
      src: src + '/images/**/*.{jpg,jpeg,png,gif}',
      dest: build + '/images',
      options: {
        optimizationLevel: 3,
        progessive: true,
        interlaced: true
      }
    },
    html: {
      src: build + '/**/*.html',
      dest: build,
      options: {
        collapseWhitespace: true
      }
    },
    stripCode: {
      src: build + '/**/*.js',
      dest: build,
      options: {
        start_comment: "start-dev-block",
        end_comment: "end-dev-block"
      }
    }
  },
  watch: {
    html: src + '/**/*.{html,js}',
    sass: src + '/**/*.{sass,scss}',
    fonts: src + '/fonts/**/*',
    images: src + '/images/**/*',
    extras: src + '/*.{txt,ico}'
  },
  revision: {
    src: {
      assets: [
        build + '/css/*.css',
        build + '/js/*.js',
        build + '/images/**/*'
      ],
      base: build
    },
    dest: {
      assets: build,
      manifest: {
        name: 'manifest.json',
        path: build
      }
    }
  },
  collect: {
    src: [
      build + '/manifest.json',
      build + '/**/*.{html,xml,txt,json,css,js}',
      '!' + build + '/feed.xml'
    ],
    dest: build
  }
};
