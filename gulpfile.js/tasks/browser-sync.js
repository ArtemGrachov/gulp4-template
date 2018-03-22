module.exports = function() {
    $.bs.init({
        open: false,
        server: {
            baseDir: $.config.dist.dir
        }
    });
    $.bs.watch([$.config.dist.dir + "**/*.*", "!**/*.css"], $.bs.reload);
};
