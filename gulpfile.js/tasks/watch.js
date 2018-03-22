const source = $.config.source;

module.exports = function() {
    console.log(source.dir + source.scripts.dir + "**/*.js");
    console.log(source.dir + source.styles.dir + "**/*.js");
    $.gulp.watch(source.dir + source.pages + "**/*.pug", $.gulp.series("pug"));
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
