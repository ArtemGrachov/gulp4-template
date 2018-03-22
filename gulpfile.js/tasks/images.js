const source = $.config.source;
const dist = $.config.dist;

module.exports = function() {
    return $.gulp
        .src(source.dir + source.assets.dir + source.assets.img + "**/*.*")
        .pipe($.imagemin())
        .pipe($.gulp.dest(dist.dir + dist.assets.dir + dist.assets.img));
};
