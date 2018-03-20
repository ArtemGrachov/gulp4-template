module.exports = function() {
    return $.gulp.src($.config.dist.dir, { read: false }).pipe($.clean());
};
