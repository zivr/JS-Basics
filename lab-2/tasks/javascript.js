import gulp         from 'gulp';
import gulpif       from 'gulp-if';
import size         from 'gulp-size';
import gutil        from 'gulp-util';
import babel        from 'gulp-babel';
import concat       from 'gulp-concat';
import uglify       from 'gulp-uglify';
import streamqueue  from 'streamqueue';
import sourcemaps   from 'gulp-sourcemaps';

const concatJsFiles = (es6Files, externalJsFiles, destFolder, outputFileName, compileToProduction) => {
    const thirdPartyStream = gulp.src(externalJsFiles);

    const es6Stream = gulp.src(es6Files)
        .pipe(gulpif(!compileToProduction, sourcemaps.init()))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulpif(!compileToProduction, sourcemaps.write()))
        .pipe(gulpif(compileToProduction, uglify().on('error', gutil.log)));

    return streamqueue({ objectMode: true }, thirdPartyStream, es6Stream)
        .pipe(concat(`${outputFileName}.js`))
        .pipe(size({ showFiles: true }))
        .pipe(gulp.dest(`${destFolder}/`));
};

gulp.task('javascript', () => {
    const es6Files = [
        'app/js/!(main)*.js',
        'app/js/main.js'
    ];
    const thirdPartyFiles = [];
    return concatJsFiles(es6Files, thirdPartyFiles, `${process.build.destination}/js`,
        'todo', process.build.isProduction);
});
