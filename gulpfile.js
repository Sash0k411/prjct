const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');

gulp.task('sass-compile' , function(){
  return gulp.src('./scss//*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ errLogToConsole: false, }))
    .on('error', function(err) {
      notify().write(err);
      this.emit('end');
    })
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css'))
})

gulp.task('watch', function(){
  gulp.watch('./scss//*.scss' , gulp.series('sass-compile'))
})
