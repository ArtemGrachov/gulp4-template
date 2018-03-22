const source = $.config.source;

module.exports = function() {
    $.gulp.watch(
        source.dir + source.pug.dir + "**/*.pug",
        $.gulp.series("pug")
    );
    $.gulp.watch(
        source.dir + source.styles.dir + "**/*.scss",
        $.gulp.series("styles")
    );
    $.gulp.watch(
        source.dir + source.scripts.dir + "**/*.js",
        $.gulp.series("scripts")
    );
    $.gulp.watch(
        source.dir + source.assets.dir + source.assets.img + "**/*.*",
        $.gulp.series("images")
    );
    $.gulp.watch(
        source.dir + source.assets.dir + source.assets.fonts + "**/*.*",
        $.gulp.series("fonts")
    );
};
