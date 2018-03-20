const source = $.config.source;
const dist = $.config.dist;
module.exports = function() {
    return $.gulp
        .src(source.dir + source.pages + "/**/*.pug")
        .pipe(
            $.pug({
                basedir: __dirname,
                locals: {
                    styles: dist.styles + ".css",
                    scripts: dist.scripts + ".js",
                    cssLibs: $.libList.cssLibs.length ? dist.styles + dist.lib + ".css" : null,
                    jsLibs: $.libList.jsLibs.length ? dist.scripts + dist.lib + ".js" : null
                }
            })
        )
        .pipe($.gulp.dest(dist.dir));
};
