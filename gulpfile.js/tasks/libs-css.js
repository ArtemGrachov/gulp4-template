module.exports = function() {
    return $.gulp
        .src($.libList.cssLibs.map(libPath => "node_modules/" + libPath))
        .pipe(
            $.concat($.config.dist.libs + ($.prod ? $.config.dist.min + ".css" : ".css"))
        )
        .pipe($.if($.prod, $.cssmin()))
        .pipe($.gulp.dest($.config.dist.dir));
};
