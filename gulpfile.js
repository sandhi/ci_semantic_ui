var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('styles',function(){
  gulp.src('assets/css/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/css'))
    .pipe(rename({suffix: '.min'}))
		.pipe(minifyCss())
		.pipe(gulp.dest('assets/css'));
});

gulp.task('default', function() {
  gulp.watch('assets/**/*.scss',['styles']);
});
