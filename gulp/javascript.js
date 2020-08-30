import gulp from 'gulp';
import babel from 'gulp-babel';
import concat from 'gulp-concat';


export const thirdPartyJs = () => {
  // Loads third party libraries in the order they appear in the array
  return gulp.src([
    './src/js/lib/jquery.js',
    './src/js/lib/bootstrap.min.js'
  ])
    .pipe(concat('lib.js'))
    .pipe(gulp.dest('./dist/js'));
}

export const js = () => {
  return gulp.src('src/js/app.js')
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(gulp.dest('dist/js'))
}
