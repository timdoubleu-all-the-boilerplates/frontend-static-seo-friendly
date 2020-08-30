import gulp from 'gulp';
import browserSync from 'browser-sync';
import sass from 'gulp-sass';
import rename from 'gulp-rename';
import concat from 'gulp-concat';

export const thirdPartyCss = () => {
  // Loads third party libraries in the order they appear in the array
  return gulp.src([
    './src/scss/lib/bootstrap.min.css'
  ])
    .pipe(concat('lib.css'))
    .pipe(gulp.dest('./dist/css'));
}

export const styles = () => {
  return gulp.src('src/scss/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('app.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
}

// export default { thirdPartyCss, styles }