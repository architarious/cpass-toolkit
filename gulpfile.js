'use strict';



var gulp          = require('gulp');
var watch         = require('gulp-watch');
var changed       = require('gulp-changed');
var rename        = require('gulp-rename');


//////////////////////////////////////////////////
//////////////////////////////////////////////////
//PRIMARY PROCESSES
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//////////////////////////////
// BrowserSync Task
//////////////////////////////
var browserSync   = require('browser-sync');
var bsReload      = browserSync.reload;

gulp.task('browserSync', function () {
  browserSync({
   proxy: "localhost:2000",
    open: false,
    logConnections: true,
    logSnippet: true
  });  
});


//////////////////////////////
// CSS Processing
//////////////////////////////
var paths       = require('compass-options').paths();

var rootCSS     = paths.css,
    rootSCSS    = paths.sass,
    rootFonts   = paths.fonts,
    rootImages  = paths.images,
    rootJS      = paths.js;

var tempCSS     = paths.css + '/temp';




// Compass via-shell
//////////////////////////////
var shell       = require('gulp-shell');

gulp.task('compass', shell.task([
      'compass compile --time'
]));


// PostCSS
//////////////////////////////


gulp.task('postCSS', ['compass'], function () {
  var postcss       = require('gulp-postcss');
  var sourcemaps    = require('gulp-sourcemaps');


  var autoprefixer  = require('autoprefixer-core');
  var hex           = require('postcss-color-hex');

  var processors    = [
      autoprefixer({ browsers: ['last 3 versions', '> 1%', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 3',  'android 4', 'safari 5'],  cascade: false }),
      require('postcss-opacity'),
      hex({rgba: true})
  ];

   return gulp.src(rootCSS + '**/*.css')      
        .pipe(changed(rootCSS, {extension: '.map'}))
        .pipe(sourcemaps.init())
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./'))
        .pipe(bsReload({stream: true})); 
});

gulp.task('styles', ['compass', 'postCSS']);

//////////////////////////////
// Server Tasks
//////////////////////////////
gulp.task('server', ['browserSync'], function(){
  gulp.watch(rootSCSS + '/**/*.scss', [ 'postCSS']);
  gulp.watch(paths.img + '*').on("change", bsReload);
  gulp.watch("./views/*.html").on("change", bsReload);

});
gulp.task('serve', ['server']);


//////////////////////////////////////////////////
//////////////////////////////////////////////////
//SECONDARY PROCESSES
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// minifyCSS
//////////////////////////////

gulp.task('minify-css', function() {
  var minifyCSS     = require('gulp-minify-css');

  return gulp.src(paths.css + '/**/*.css')
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest(paths.css))
});