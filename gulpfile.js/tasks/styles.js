const source = $.config.source;
const dist = $.config.dist;

module.exports = function() {
    return $.gulp
        .src(source.dir + source.styles)
        .pipe($.if($.prod, $.sourcemaps.init()))
        .pipe(
            $.sassVars({
                imgUrl: dist.assets.dir + dist.assets.img,
                fontsUrl: dist.assets.dir + dist.assets.fonts
            })
        )
        .pipe(
            $.sass({
                outputStyle: $.prod ? "compressed" : "expanded"
            })
        )
        .pipe($.rename(dist.styles + ($.prod ? dist.min + ".css" : ".css")))
        .pipe($.if($.prod, $.sourcemaps.write("./")))
        .pipe($.gulp.dest(dist.dir));
};
