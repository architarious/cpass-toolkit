'use strict';

var gulp = require('gulp');
var bower = require('bower');
var concat = require('gulp-concat');
var mainBowerFiles = require('main-bower-files');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var paths = require('compass-options').paths();
var browserSync = require('browser-sync');
var shell = require('gulp-shell');

//////////////////////////////
// Begin Gulp Tasks
//////////////////////////////
gulp.task('lint', function () {
  return gulp.src([
      paths.js + '/**/*.js',
      '!' + paths.js + '/**/*.js'
    ])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
});

//////////////////////////////
// Load stuff from bower
//////////////////////////////
gulp.task("libs", function(){
    bower_files()
    .pipe(concat('./libs.js'))
    .pipe(gulp.dest("/"));
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
  gulp.watch(paths.js + '/**/*.js', ['lint']);
});

//////////////////////////////
// BrowserSync Task
//////////////////////////////
gulp.task('browserSync', function () {
  browserSync.init([
    paths.css +  'stylesheets/*.css',
    paths.js + 'javascripts/*.js',
    paths.img + 'images/*',
    paths.fonts + 'stylesheets/fonts/*',
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
gulp.task('server', ['watch', 'compass', 'browserSync']);
gulp.task('serve', ['server']);