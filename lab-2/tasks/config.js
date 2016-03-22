import gulp         from 'gulp';

const buildConfig = (isProduction) => {
    process.build = {
        isProduction: isProduction,
        destination: isProduction ? 'dist' : 'build'
    };
};

//default to development mode
buildConfig(false);

gulp.task('config:dist', () => {
    //configure for production mode
    buildConfig(true);
});
