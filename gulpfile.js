'use strict'

const gulp = require('gulp');
const tsc = require('gulp-typescript');
const nodemon = require('gulp-nodemon');
const tsProject = tsc.createProject('tsconfig.json');
const clean = require('gulp-clean');
const outDir = require('./tsconfig.json').compilerOptions.outDir;
      
const SOURCE_FILES = 'src/**/*.ts';
const TEST_FILES = 'test/**/*.ts';
const ENTRY_POINT = './build/index.js';

gulp.task("default", ['serve']);

gulp.task('build', function() {

    console.log('Building the project ...');

    return gulp.src([SOURCE_FILES, TEST_FILES])
               .pipe(gulp.dest(outDir))
               .pipe(tsProject()).js
               .pipe(gulp.dest('.'));

});

gulp.task('build-clean', ['build'], function() {

    return gulp.src('./build/**/*.ts', {read: false}).pipe(clean());

});

gulp.task('watch', function() {
    
    gulp.watch('./src/**/*.ts', ['build-clean']);

});

gulp.task('serve', ['build-clean', 'watch'], function () {
    nodemon({
        script: ENTRY_POINT,
        env: { 'NODE_ENV': 'development' }
    });
});