import del from 'del';

const cleanDist = () => {
  return del([
    'dist/css/**/*',
    '!dist/css/.gitkeep',
    'dist/js/**/*',
    '!dist/js/.gitkeep',
    'dist/imgs/**/*',
    '!dist/imgs/.gitkeep',
    'dist/*.html',
  ]);
}

export default cleanDist;