const source = $.config.source;
const dist = $.config.dist;

module.exports = function() {
    return $.gulp
        .src(
            source.scripts.order.map(
                script => source.dir + source.scripts.dir + script
            )
        )
        .pipe($.if($.prod, $.sourcemaps.init()))
        .pipe($.concat(dist.scripts + ($.prod ? dist.min + ".js" : ".js")))
        .pipe(
            $.babel({
                presets: ["env"]
            })
        )
        .pipe($.if($.prod, $.uglify()))
        .pipe(
            $.if(
                $.prod,
                $.wrapper({
                    header: "(function() {",
                    footer: "})();"
                })
            )
        )
        .pipe($.if($.prod, $.sourcemaps.write("./")))
        .pipe($.gulp.dest(dist.dir));
};
