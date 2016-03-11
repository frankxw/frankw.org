var path        = require('path'),
    gulp        = require('gulp'),
    concat      = require('gulp-concat'),
    minifycss   = require('gulp-minify-css'),
    uglify      = require('gulp-uglify'),
    clean       = require('gulp-clean'),
    less        = require('gulp-less'),
    shell       = require('gulp-shell'),
    gutil       = require('gulp-util'),
    openurl     = require('openurl'),
    runSequence = require('run-sequence'),
    combiner    = require('stream-combiner2'),
    browserify  = require('browserify'),
    source      = require('vinyl-source-stream'),
    buffer      = require('vinyl-buffer'),
    reactify    = require('reactify'),
    watchify    = require('watchify'),
    _           = require('lodash');

var JSX_MAIN        = 'js/main.jsx',
    BUILD_PATH      = 'build/',
    MIN_CSS_FILE    = 'frankw.org.min.css',
    MIN_JS_FILE     = 'frankw.org.min.js';

////////////////////////////
////// INTERNAL TASKS //////
////////////////////////////

var getBundler = (function() {
    var bundler = null;
    var isDebugBundle = false;

    return function getBundler(debug) {
        if (bundler == null || isDebugBundle !== debug) {
            if (bundler != null) {
                bundler.close();
                bundler = null;
            }

            isDebugBundle = debug;

            bundler = browserify(JSX_MAIN, _.extend({ debug: debug }, isDebugBundle ? watchify.args : {}));
            if (isDebugBundle) {
                bundler = watchify(bundler).transform(reactify);
                bundler.on('log', gutil.log.bind('gutil'));
            }
            else {
                bundler = bundler.transform(reactify);
            }
        }
        return bundler;
    };
}());

gulp.task('less', function() {
    var combined = combiner.obj([
        gulp.src('less/includes.less'),
        less(),
        concat(MIN_CSS_FILE),
        minifycss(),
        gulp.dest(path.join(BUILD_PATH, 'css'))
    ]);

    combined.on('error', function(err) {
        gutil.log(err.toString());
        gutil.beep();
    });

    return combined;
});

function js(debug) {
    var proc = getBundler(debug)
        .bundle()
        .on('error', function(err) {
            gutil.log(err.toString());
            gutil.beep();
            this.emit('end');
        })
        .pipe(source(MIN_JS_FILE))
        .pipe(buffer());

    if(!debug) {
        proc.pipe(uglify().on('error', function(err) {
            gutil.log(err.toString());
        }))
    }

    return proc.pipe(gulp.dest(path.join(BUILD_PATH, 'js')));
}

gulp.task('js', function() {
    return js(false);
});

// Same as js but we don't uglify
gulp.task('js_debug', function() {
    return js(true);
});

gulp.task('copy_img', function() {
    return gulp.src('img/**').pipe(gulp.dest(path.join(BUILD_PATH, 'img')));
});

gulp.task('copy_css', function() {
    return gulp.src('css/**').pipe(gulp.dest(path.join(BUILD_PATH, 'css')));
});

gulp.task('copy_fonts', function() {
    return gulp.src('fonts/**').pipe(gulp.dest(path.join(BUILD_PATH, 'fonts')));
});

gulp.task('copy_files', function() {
    return gulp.src('files/**').pipe(gulp.dest(path.join(BUILD_PATH, 'files')));
});

gulp.task('copy_index', function() {
    return gulp.src('index.html').pipe(gulp.dest(BUILD_PATH));
});

gulp.task('watch_client', function() {
    gulp.watch('less/**', ['less']);
    gulp.watch('js/**', ['js_debug']);
    gulp.watch('img/**', ['copy_img']);
    gulp.watch('files/**', ['copy_files']);
    gulp.watch('css/**', ['copy_css']);
    gulp.watch('fonts/**', ['copy_fonts']);
    gulp.watch('index.html', ['copy_index']);
});

gulp.task('run_app', function() {
    return gulp.src('')
        .pipe(shell(['sh run.sh'], {cwd: 'test/'}));
});

gulp.task('build_client', function(callback) {
    runSequence(['copy_img',
                'copy_css',
                'copy_fonts',
                'copy_files',
                'copy_index',
                'less',
                'js'],
                callback);
});

gulp.task('build_client_debug', function(callback) {
    runSequence(['copy_img',
                'copy_css',
                'copy_fonts',
                'copy_files',
                'copy_index',
                'less',
                'js_debug'],
                callback);
});

//////////////////////////
////// PUBLIC TASKS //////
//////////////////////////

gulp.task('clean', function() {
    return gulp.src(BUILD_PATH, {read: false})
    .pipe(clean());
});

gulp.task('build', function(callback) {
    runSequence('clean',
                ['build_client'],
                callback);
});

gulp.task('run', function(callback) {
    runSequence('clean',
                'build_client_debug',
                ['run_app',
                'watch_client'],
                callback);
});

gulp.task('open', function() {
    openurl.open('http://localhost:8080');
});
