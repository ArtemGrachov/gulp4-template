module.exports = function() {
    return $.gulp
        .src($.libList.jsLibs.map(libPath => "node_modules/" + libPath))
        .pipe(
            $.concat($.config.dist.libs + ($.prod ? $.config.dist.min + ".js" : ".js"))
        )
        .pipe($.if($.prod, $.uglify()))
        .pipe($.gulp.dest($.config.dist.dir));
};
