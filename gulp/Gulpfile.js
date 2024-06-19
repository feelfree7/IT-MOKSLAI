const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))


function styles(cb) {
    gulp.src('src/sass/**/.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dest/'))
    
}




function copyHtmlFile(cb) {
    gulp.src('src/index.html')
    .pipe(gulp.dest('dest/'))
    cb()
}

function watch(cb) {
    gulp.watch('src/**/*.html', gulp.series(copyHtmlFile))
gulp.watch('src/sass/**/*.scss', gulp.series(styles))
}

exports.styles = styles
exports.watch = watch
exports.copyHtmlFile = copyHtmlFile
exports.default = gulp.series(gulp.parallel(copyHtmlFile, styles), watch)
