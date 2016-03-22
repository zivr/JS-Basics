import gulp         from 'gulp';
import gulpSyncFunc from 'gulp-sync';

const gulpsync = gulpSyncFunc(gulp);

gulp.task('watch', () => {
    gulp.watch('app/scss/**/*.scss', ['styles']);
    gulp.watch('app/js/**/*.js', gulpsync.sync(['javascript', 'reloadBrowser']));
    gulp.watch('index.html', gulpsync.sync(['reloadBrowser']));
});
