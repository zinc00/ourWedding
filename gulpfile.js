/**
 * Created by avi on 16-Oct-15.
 */
'use strict';
var gulp = require('gulp');
var browserSync = require('browser-sync');

var filesToWatch = ["./*.*" , './css/*.*' , './js/*.*'];

gulp.task('serve', [], function() {
    browserSync.init(null, {
        server: "./",
        port: 3000,
        files: filesToWatch,
        browser: ["google chrome"]
    });
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['serve']);