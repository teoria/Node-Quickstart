'use strict'

const gulp = require('gulp');
const tsc = require('gulp-typescript');
const nodemon = require('gulp-nodemon');
const tsProject = tsc.createProject('tsconfig.json');
const outDir = require('./tsconfig.json').compilerOptions.outDir;
      
const SOURCE_FILES = 'src/**/*.ts';
const TEST_FILES = 'test/**/*.ts';
const ENTRY_POINT = './build/index.js';

gulp.task("default", ['serve', 'copy']);

gulp.task('copy', function() {
    
    return gulp.src(['./config.json'])
               .pipe(gulp.dest(outDir));

});

gulp.task('build', ['copy'], function() {

    console.log('Building the project ...');

    return gulp.src([SOURCE_FILES, TEST_FILES])
               .pipe(gulp.dest(outDir))
               .pipe(tsProject()).js
               .pipe(gulp.dest('.'));

});

gulp.task('watch', function() {
    gulp.watch('./src/**/*.ts', ['build']);
});

gulp.task('serve', ['build', 'watch'], function () {
    nodemon({
        script: ENTRY_POINT,
        env: { 'NODE_ENV': 'development' }
    });
});