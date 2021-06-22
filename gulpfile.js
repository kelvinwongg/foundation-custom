'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var gulpClean = require('gulp-clean');

// Path to Foundation
const foundationPath = './node_modules/foundation-sites/scss/';
const distributionPath = './dist';

function clean() {
	return gulp.src(distributionPath, { read: false })
		.pipe(gulpClean());
}

function build() {
	return gulp.src('./src/foundation-custom.scss')
		.pipe(sass({
			includePaths: [
				foundationPath
			]
		}).on('error', sass.logError))
		.pipe(gulp.dest(distributionPath));
}

exports.clean = clean;
exports.build = build;
exports.default = gulp.series(clean, build);