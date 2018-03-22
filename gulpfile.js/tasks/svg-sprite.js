const source = $.config.source;

module.exports = function() {
    return $.gulp
        .src(source.dir + source.svgSprite.dir + "**/*.svg")
        .pipe($.imagemin())
        .pipe(
            $.svgCss({
                fileName: source.svgSprite.filename,
                cssPrefix: source.svgSprite.prefix
            })
        )
        .pipe($.gulp.dest(source.dir + source.svgSprite.output));
};
