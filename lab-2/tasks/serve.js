import gulp         from 'gulp';
import browserSync  from 'browser-sync';

const BROWSER_SYNC_CONFIG = {
    notify: false,
    port: 9000,
    online: true,
    server: {
        baseDir: [''],
        files: `${process.build.destination}/**/*.css`
        //routes: {
        //    '/bower_components': 'bower_components'
        //}
    }
};

gulp.task('serve', () => {
    BROWSER_SYNC_CONFIG.open = false;
    gulp.start('serve:start');
});

gulp.task('serve:start', ['build', 'watch'], () => {
    browserSync(BROWSER_SYNC_CONFIG);
});

gulp.task('reloadBrowser',browserSync.reload);