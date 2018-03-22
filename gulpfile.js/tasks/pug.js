const source = $.config.source;
const dist = $.config.dist;
module.exports = function() {
    return $.gulp
        .src(source.dir + source.pages + "/**/*.pug")
        .pipe(
            $.pug({
                basedir: __dirname,
                locals: {
                    styles: dist.styles + ($.prod ? ".min.css" : ".css"),
                    scripts: dist.scripts + ($.prod ? ".min.js" : ".js"),
                    cssLibs: $.libList.cssLibs.length
                        ? dist.styles + dist.lib + ".css"
                        : null,
                    jsLibs: $.libList.jsLibs.length
                        ? dist.scripts + dist.lib + ".js"
                        : null,
                    imgUrl: dist.assets.dir + dist.assets.img
                }
            })
        )
        .pipe($.gulp.dest(dist.dir));
};
