var gulp = require("gulp");
const autoprefixer = require("autoprefixer");
const plumber = require("gulp-plumber");
const sourcemaps = require("gulp-sourcemaps");
const postcss = require('gulp-postcss');
const minify = require("gulp-minify-css");
const sass = require('gulp-sass')(require("sass"));
const mqpacker = require("css-mqpacker");
const mergeRules = require("postcss-merge-rules");
const discardDuplicates = require("postcss-discard-duplicates");
const rtlcss = require("gulp-rtlcss");
const rename = require("gulp-rename");

const PATH_DIST = "./public/dist/";
const PATH_SCSS = "./public/scss/style.scss"
const PATH_ALL_SCSS = "./public/scss/**/**.scss"

function styles() {
    return (
        gulp.src(PATH_SCSS)
            .pipe(sourcemaps.init()) // source map
            .pipe(plumber()) // error handling
            .pipe(sass().on('error', sass.logError)) // scss 
            .pipe(postcss([
                autoprefixer({
                    cascade: false
                }),
                mqpacker({
                    sort: true
                }),
                mergeRules(),
                discardDuplicates()
            ]))
            .pipe(sourcemaps.write()) // source map
            .pipe(minify())
            .pipe(gulp.dest(PATH_DIST))
            .pipe(rtlcss()) // Convert to RTL.
            .pipe(rename({ suffix: '-rtl' })) // Append "-rtl" to the filename.
            .pipe(sourcemaps.write()) // Output source maps.
            .pipe(gulp.dest(PATH_DIST)) // Output RTL stylesheets.
    )
}

gulp.task('watch', function () {
    gulp.watch([PATH_ALL_SCSS], gulp.parallel(styles));
    // gulp.watch(['./public/index.html'], gulp.parallel(styles));
});

exports.styles = styles;