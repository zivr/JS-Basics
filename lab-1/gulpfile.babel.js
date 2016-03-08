import gulp from 'gulp';
import babel from 'gulp-babel';
import exec from 'gulp-exec';
import server from 'gulp-develop-server';
import concat from 'gulp-concat';

gulp.task('babel', () => {
    return gulp.src(['src/ToDo/**/*.js','src/app.js'])
    .pipe(concat('app.js'))
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('concat', () => {
    return gulp.src(['src/ToDo/**/*.js','src/app.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('server:start', () => {
    server.listen( { path: './dist/app.js' } );
});

gulp.task('watch:babel', function() {
    gulp.watch('src/**/*.js', ['babel', server.restart ]);
});
gulp.task('watch:es6', function() {
    gulp.watch('src/**/*.js', ['concat', server.restart ]);
});

gulp.task('serve:babel', ['babel', 'server:start', 'watch:babel']);
gulp.task('serve:es6', ['concat', 'server:start', 'watch:es6']);

