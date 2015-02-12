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
var rename = require('gulp-rename');
var flatten = require('gulp-flatten');
var imagemin = require('gulp-imagemin');
var pngcrush = require('imagemin-pngcrush');

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
  .pipe(gulp.dest( paths.js + '/lib'))
  .pipe(uglify())
  .pipe(rename({ suffix: ".min" }))
  .pipe(gulp.dest(paths.js + '/lib'))
  .pipe(jsFilter.restore())

  // grab vendor css files from bower_components, minify and push in /public
  .pipe(cssFilter)
  .pipe(gulp.dest( paths.css))
  .pipe(minifyCSS())
  .pipe(rename({
        suffix: ".min"
    }))
  .pipe(gulp.dest( paths.css))
  .pipe(cssFilter.restore())

  // grab vendor font files from bower_components and push in /public 
  .pipe(fontFilter)
  .pipe(flatten())
  .pipe(gulp.dest(paths.fonts))

});

////////////////////////////
// FILE COMPRESSION - minifycss
/////////////////////////////
gulp.task('minifycss', function(){
  gulp.src( paths.css + '/*.css')
  //  .pipe(minifyCSS({keepBreaks:true}))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest('./stylesheets/'))

});

////////////////////////////
// FILE COMPRESSION - uglify
/////////////////////////////
gulp.task('uglify', function() {
  gulp.src(paths.js + '/**/*.js')
    //.pipe(uglify())
    .pipe(gulp.dest('./javascripts/'))
    
});

////////////////////////////
// FILE COMPRESSION - imagemin
/////////////////////////////
gulp.task('imagemin', function () {
    return gulp.src(paths.img + '/*')
      //  .pipe(imagemin({
      //      progressive: true,
      //      svgoPlugins: [{removeViewBox: false}],
      //      use: [pngcrush()]
      //  }))
        .pipe(gulp.dest('./images/'));
});

////////////////////////////
// FILE COMPRESSION 
/////////////////////////////

gulp.task('compress', ['minifycss', 'uglify', 'imagemin']);


//////////////////////////////
// Compass Task
//////////////////////////////
gulp.task('compass', function () {
  return gulp.src(paths.sass + '/**/*')
    .pipe(shell([
      'bundle exec compass watch --time'
    ]));
});

////////////////////////////
// move-css
/////////////////////////////
gulp.task('move-css', function(){
  gulp.src( paths.css + '/*.css')
    //.pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest('./stylesheets/'))

});

////////////////////////////
// move-js
/////////////////////////////
gulp.task('move-js', function() {
  gulp.src(paths.js + '/**/*.js')
    .pipe(gulp.dest('./javascripts/'))
    
});

////////////////////////////
// move-img
/////////////////////////////
gulp.task('move-img', function () {
    return gulp.src(paths.img + '/*')
        .pipe(gulp.dest('./images/'));
});




//////////////////////////////
// watch
//////////////////////////////
gulp.task('watch', function () {
  gulp.watch(paths.js + '/**/*.js', ['lint', 'move-js'])
  gulp.watch(paths.css + '/*.css', ['move-css'])
  gulp.watch(paths.img + '*', ['move-img'])
});



//////////////////////////////
// BrowserSync Task
//////////////////////////////
gulp.task('browserSync', function () {
  browserSync.init([
    'stylesheets/*.css',
    'javascripts/**/*.js',
    'images/**/*',
    'stylesheets/fonts/**/*',
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