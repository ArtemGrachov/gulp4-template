const source = $.config.source;
const dist = $.config.dist;
module.exports = function() {
    return $.gulp
        .src(source.dir + source.style)
        .pipe($.sass())
        .pipe($.gulp.dest(dist.dir));
};
