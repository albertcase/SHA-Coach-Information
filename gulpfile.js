var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    minify = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
    inject = require('gulp-inject'),
    sass = require('gulp-sass'),
    rename = require("gulp-rename"),
    browserSync = require('browser-sync').create();

//Define the app path
var path = {
    all:['template/develop/*.html','./app/css/*.css','./app/js/*.js'],
    template:['./template/develop/index.html'],
    css:['./app/css/*.css'],
    js:['./app/js/lib/zepto.min.js','./app/js/rem.js','./app/js/api.js','./app/js/common.js','./app/js/controller.js'],
    images:['./app/images/*.*']
};

// Browser-sync
gulp.task('browser-sync', function() {
    browserSync.init(path.all,{
        server: {
            baseDir: "./",
            startPath: ''
        }
    });
});

//压缩css
gulp.task('css',function () {
    // 1. 找到文件
    gulp.src(path.css)
        //.pipe(concat('style.css'))
        // 2. 压缩文件
        .pipe(minify())
        // 3. 另存为压缩文件
        .pipe(gulp.dest('./app/css'));
});

//压缩js
gulp.task('js', function () {
    // 1. 找到文件
    gulp.src(path.js)
        .pipe(concat('widget.js'))
        // 2. 压缩文件
        .pipe(uglify())
        .pipe(rename('widget.js'))
        // 3. 另存为压缩文件
        .pipe(gulp.dest('./app/js'));
});

//generate index.tpl.php
gulp.task('generate_index',['css','js'], function () {
    var target = gulp.src('./template/develop/index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src(['./app/js/widget.js', './app/css/style.css'], {read: false});

    return target.pipe(inject(sources))
        .pipe(rename('index.tpl.php'))
        .pipe(gulp.dest('./template/site'));
});


gulp.task('template',['generate_index']);

gulp.task('default',['browser-sync']);


