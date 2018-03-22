const source = $.config.source;
const dist = $.config.dist;

module.exports = function() {
    return $.gulp
        .src(source.dir + source.assets.dir + source.assets.fonts + "**/*.*")
        .pipe($.gulp.dest(dist.dir + dist.assets.dir + dist.assets.fonts));
};
