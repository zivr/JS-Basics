import gulp         from 'gulp';
import gulpSyncFunc from 'gulp-sync';

const gulpsync = gulpSyncFunc(gulp);

gulp.task('build', gulpsync.sync(['clean', ['styles', 'javascript']]));