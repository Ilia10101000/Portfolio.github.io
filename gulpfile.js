let {dest, src} = require('gulp');
let uglify = require('gulp-uglify');
let cleanCSS = require('gulp-clean-css');

function task (cb){
    taskCSS();
    taskJS();
    cb()
};

function taskJS(cb){
    return src('some.js')
    .pipe(uglify())
    .pipe(dest('dist'))
};

function taskCSS(cb){
    return src('css.css')
    .pipe(cleanCSS())
    .pipe(dest('dist'))
};

exports.default = task