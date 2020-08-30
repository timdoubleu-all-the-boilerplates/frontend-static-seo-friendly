import gulp from 'gulp';
import nunjucksRender from 'gulp-nunjucks-render';
import htmlmin from 'gulp-htmlmin';

const buildNunjucks = () => {
  return gulp.src('src/html/*.+(html|nunjucks|njk)')
    .pipe(nunjucksRender({
      path: ['src/html/templates']
    }))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'))
}


export default buildNunjucks;
