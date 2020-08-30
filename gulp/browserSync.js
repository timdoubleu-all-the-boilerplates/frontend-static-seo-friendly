import gulp from 'gulp';
import browserSync from 'browser-sync';
import styles from './styles';

const watch = () => {
  browserSync.init({
    server: {
      baseDir: "./dist",
      index: "/index.html"
    }
  });
  gulp.watch('src/scss/**/*.scss', styles)
  gulp.watch('./*.njk').on('change', buildNunjucks);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./*.js').on('change', browserSync.reload);
}

export default watch;