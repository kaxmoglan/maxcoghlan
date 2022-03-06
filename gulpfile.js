const gulp = require("gulp");
const { parallel } = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const imagemin = require("gulp-imagemin");
const sass = require("gulp-sass")(require("node-sass"));

// FILE LOCATIONS
const files = {
	src: {
		sass: "./src/sass/**/*.scss",
		images: "./src/images/src/**/*",
	},
	dest: {
		sass: "./src",
		images: "./src/images/dist",
	},
};

// SASS
function styles() {
	return gulp
		.src(files.src.sass)
		.pipe(sass().on("error", sass.logError))
		.pipe(autoprefixer("last 4 versions"))
		.pipe(gulp.dest(files.dest.sass));
}

// IMAGES
function images() {
	return gulp
		.src(files.src.images)
		.pipe(
			imagemin([
				imagemin.optipng({ optimizationLevel: 5 }),
				imagemin.mozjpeg({ quality: 75, progressive: true }),
			])
		)
		.pipe(gulp.dest(files.dest.images));
}

//WATCH
function watch() {
	gulp.watch(files.src.sass, styles);
	gulp.watch(files.src.images, images);
}

// EXPORTS
exports.styles = styles;
exports.images = images;
exports.watch = watch;
exports.build = parallel(styles, images);
