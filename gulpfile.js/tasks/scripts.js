const source = $.config.source;
const dist = $.config.dist;
module.exports = function() {
    return $.gulp
        .src(
            source.scripts.order.map(
                script => source.dir + source.scripts.dir + script
            )
        )
        .pipe($.concat(dist.scripts + ".js"))
        .pipe($.gulp.dest(dist.dir));
};
