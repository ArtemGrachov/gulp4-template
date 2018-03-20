const source = $.config.source;
const dist = $.config.dist;
module.exports = function() {
    return $.gulp
        .src(source.dir + source.pages + "/**/*.pug")
        .pipe(
            $.pug({
                basedir: __dirname,
                locals: {
                    style: dist.style,
                    script: dist.script,
                    cssLibs: dist.libs.styles,
                    jsLibs: dist.libs.scripts
                }
            })
        )
        .pipe($.gulp.dest(dist.dir));
};
