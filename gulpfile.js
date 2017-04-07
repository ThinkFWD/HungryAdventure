const gulp = require('gulp');
const sass = require('gulp-sass');


gulp.task('sass', () => gulp.src('public/style/scss/style.scss')
  .pipe(sass())
  .pipe(gulp.dest('public/style/css')));

gulp.watch('public/style/scss/**/*.scss', ['sass']);
