const source = $.config.source;
const dist = $.config.dist;
module.exports = function() {
    return $.gulp
        .src(source.dir + source.pug.dir + source.pug.pages + "**/*.pug")
        .pipe(
            $.pug({
                basedir: __dirname,
                locals: {
                    pug: source.pug,
                    styles: dist.styles + ($.prod ? ".min.css" : ".css"),
                    scripts: dist.scripts + ($.prod ? ".min.js" : ".js"),
                    cssLibs: $.libList.cssLibs.length
                        ? dist.libs + ($.prod ? ".min.css" : ".css")
                        : null,
                    jsLibs: $.libList.jsLibs.length
                        ? dist.libs + ($.prod ? ".min.js" : ".js")
                        : null,
                    imgUrl: dist.assets.dir + dist.assets.img
                }
            })
        )
        .pipe($.gulp.dest(dist.dir));
};
