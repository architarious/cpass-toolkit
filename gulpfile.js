'use strict';

var gulp = require('gulp');
var watch = require('gulp-watch');
var bower = require('bower');
var concat = require('gulp-concat');
var bowerFiles = require('main-bower-files');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var paths = require('compass-options').paths();
var browserSync = require('browser-sync');
var shell = require('gulp-shell');
var minifyCSS = require('gulp-minify-css');
var gulpFilter = require('gulp-filter');
var uglify = require('gulp-uglify');

//////////////////////////////
// Begin Gulp Tasks
//////////////////////////////
gulp.task('lint', function () {
  return gulp.src([
      './app/javascripts/app.js'
    ])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(gulp.dest('./javascripts/'))
});

//////////////////////////////
// Load stuff from bower
//////////////////////////////
gulp.task('bowerlibs', function() {

  var jsFilter = gulpFilter('*.js')
  var cssFilter = gulpFilter('*.css')
  var fontFilter = gulpFilter(['*.eot', '*.woff', '*.svg', '*.ttf'])

  return gulp.src(bowerFiles())

  // grab vendor js files from bower_components, minify and push in /public
  .pipe(jsFilter)
  .pipe(gulp.dest( path.js + '/lib'))
  .pipe(uglify())
  .pipe(rename({
        suffix: ".min"
    }))
  .pipe(gulp.dest(path.js + '/lib'))
  .pipe(jsFilter.restore())

  // grab vendor css files from bower_components, minify and push in /public
  .pipe(cssFilter)
  .pipe(gulp.dest(path.css))
  //.pipe(minify-css())
  .pipe(rename({
        suffix: ".min"
    }))
  .pipe(gulp.dest(path.css))
  .pipe(cssFilter.restore())

  // grab vendor font files from bower_components and push in /public 
  .pipe(fontFilter)
  .pipe(flatten())
  .pipe(gulp.dest(path.fonts))

});

////////////////////////////
// FILE COMPRESSION - minifycss
/////////////////////////////
gulp.task('minify-css', function(){
  gulp.src(paths.css + '/*.css')
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('./stylesheets/'))

});


//////////////////////////////
// Compass Task
//////////////////////////////
gulp.task('compass', function () {
  return gulp.src(paths.sass + '/**/*')
    .pipe(shell([
      'bundle exec compass watch --time'
    ]));
});



//////////////////////////////
// Watch
//////////////////////////////
gulp.task('watch', function () {
  gulp.watch('./app/javascripts/**/*.js', ['lint'])
  //gulp.watch(paths.css + '/**/*.css', ['minify-css'])
});

//////////////////////////////
// BrowserSync Task
//////////////////////////////
gulp.task('browserSync', function () {
  browserSync.init([
    './stylesheets/**/*.css',
    paths.js + '/**/*.js',
    paths.img + '/**/*',
    paths.fonts + '/**/*',
    paths.html + '/**/*.html',],{

    proxy: {
        host: "localhost",
        port: 2000
      }

    
  });
});


//////////////////////////////
// Server Tasks
//////////////////////////////
gulp.task('server', [ 'watch', 'compass', 'browserSync']);
gulp.task('serve', ['server']);