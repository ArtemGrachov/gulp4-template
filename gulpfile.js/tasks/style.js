const source = $.config.source;
const dist = $.config.dist;
module.exports = function() {
    return $.gulp
        .src(source.dir + source.style)
        .pipe($.if($.prod, $.sourcemaps.init()))
        .pipe(
            $.sass({
                outputStyle: $.prod ? "compressed" : "expanded"
            })
        )
        .pipe($.rename(dist.styles + ($.prod ? ".min.css" : ".css")))
        .pipe($.if($.prod, $.sourcemaps.write("./")))
        .pipe($.gulp.dest(dist.dir));
};
