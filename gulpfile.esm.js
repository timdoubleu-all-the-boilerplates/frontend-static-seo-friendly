import gulp from 'gulp';
import browserSync from 'browser-sync';

import buildNunjucks from './gulp/nunjucks';
// import watch from './gulp/browserSync';
import { thirdPartyCss, styles } from './gulp/styles';
import cleanDist from './gulp/clean';
import { thirdPartyJs, js } from './gulp/javascript';

const watch = () => {
  browserSync.init({
    server: {
      baseDir: "./dist",
      index: "/index.html"
    }
  });
  gulp.watch('./*.njk').on('change', buildNunjucks);
  gulp.watch('./src/scss/**/*.scss', styles);
  gulp.watch([
    './src/scss/lib/**/*.css',
    './src/scss/lib/**/*.scss',
    thirdPartyCss
  ]);
  gulp.watch('./src/js/**/*.js').on('change', js);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./*.js').on('change', browserSync.reload);
}

exports.watch = watch;
exports.default = gulp.series(
  cleanDist,
  buildNunjucks,
  thirdPartyCss,
  styles,
  thirdPartyJs,
  js,
  watch
);