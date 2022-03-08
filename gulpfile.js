import gulp from "gulp";
import imagemin from "gulp-imagemin";
import autoprefixer from "gulp-autoprefixer";
import gulpSass from "gulp-sass";
import nodeSass from "node-sass";

const sass = gulpSass(nodeSass);

const { parallel } = gulp;

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
		.pipe(imagemin())
		.pipe(gulp.dest(files.dest.images));
}

//WATCH
function watch() {
	gulp.watch(files.src.sass, styles);
	gulp.watch(files.src.images, images);
}

// EXPORTS
export { styles, images, watch };

const build = parallel(styles, images);
export default build;
