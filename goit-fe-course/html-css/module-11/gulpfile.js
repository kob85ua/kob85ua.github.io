var gulp = require('gulp'),
    sass = require('gulp-sass'), // Компиляция SCSS
    autoprefixer = require('autoprefixer'), // Префиксы CSS
    cssnano = require('cssnano'),  // Сжатие CSS
    imagemin = require('gulp-imagemin'), // Сжатие картинок
    pngquant = require('imagemin-pngquant'), // Сжатие PNG
    uglify = require('gulp-uglify'), //Сжатие JS
    concat = require('gulp-concat'), // Объединение файлов в один
    postcss = require('gulp-postcss'), //PostCSS
    htmlmin = require('gulp-htmlmin'), // Сжатие HTML
    connect = require('gulp-connect'), // localhost
    watch = require('gulp-watch'), // Watch
    fileinclude = require('gulp-file-include'), // Компоненты HTML
    gutil = require('gulp-util'),
    sourcemaps = require('gulp-sourcemaps');  // Sourcemaps

var scriptSrc = [
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'app/js/script.js'
];
var styleSrc = [
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
    'app/style/style.scss'
];

gulp.task('css:prod', function (done) {
    gulp.src(styleSrc)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('app.min.css'))
        .pipe(postcss([
            autoprefixer({
                browsers: ['last 2 versions', 'Firefox ESR', 'Explorer >= 9', 'Android >= 4.0', '> 2%']
            }),
            cssnano()
        ]))
        .pipe(gulp.dest('dist/css'));
    done();
});

gulp.task('js:prod', function (done) {
    gulp.src(scriptSrc)
        .pipe(uglify())
        .on('error', function (err) {
            gutil.log(gutil.colors.red('[Error]'), err.toString());
        })
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('dist/js'));
    done();
});

gulp.task('img:prod', function (done) {
    gulp.src('app/img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest('dist/img'));
    done();
});

gulp.task('font:build', function (done) {
    gulp.src('app/fonts/*')
        .pipe(gulp.dest('dist/fonts'));
    done();
});

gulp.task('html:prod', function (done) {
    gulp.src(['app/*.html'], {base: "./app"})
        .pipe(fileinclude({
            prefix: '@@'
        }))
        .pipe(htmlmin(
            {collapseWhitespace: true, removeComments: true}))
        .pipe(gulp.dest('dist'));
    done();
});

gulp.task('css:dev', function (done) {
    gulp.src(styleSrc)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('app.min.css'))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('dist/css'))
        .pipe(connect.reload());
    done();
});

gulp.task('js:dev', function (done) {
    gulp.src(scriptSrc)
        .pipe(sourcemaps.init())
        .on('error', function (err) {
            gutil.log(gutil.colors.red('[Error]'), err.toString());
        })
        .pipe(concat('app.min.js'))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('dist/js'))
        .pipe(connect.reload());
    done();
});

gulp.task('img:dev', function (done) {
    gulp.src('app/img/*')
        .pipe(gulp.dest('dist/img'));
    done();
});

gulp.task('html:dev', function (done) {
    gulp.src(['app/*.html'], {base: "./app"})
        .pipe(fileinclude({
            prefix: '@@'
        }))
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
    done();
});

gulp.task('connect', function (done) {
    connect.server({
        root: 'dist',
        livereload: true
    });
    done();
});

gulp.task('watchFiles', function (done) {
    gulp.watch('app/style/*.scss', gulp.series('css:dev'));
    gulp.watch('app/js/*.js', gulp.series('js:dev'));
    gulp.watch('app/img/*.*', gulp.series('img:dev'));
    gulp.watch('app/font/*.*', gulp.series('font:build'));
    gulp.watch('app/*.html', gulp.series('html:dev'));
    done();
});

gulp.task('watch', gulp.parallel('connect', 'watchFiles'));

gulp.task('default', gulp.series('css:dev', 'js:dev', 'img:dev', 'font:build', 'html:dev', (done) => {
    done();
}));

gulp.task('prod', gulp.series('css:prod', 'js:prod', 'img:prod', 'font:build', 'html:prod', (done) => {
    console.log('Success Dev');
    done();
}));

gulp.task('dev', gulp.series('css:dev', 'js:dev', 'img:dev', 'font:build', 'html:dev', (done) => {
    console.log('Success Dev');
    done();
}));