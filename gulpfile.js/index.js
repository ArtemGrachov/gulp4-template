"use strict";

global.$ = require("gulp-load-plugins")();
$.gulp = require("gulp");
$.bs = require("browser-sync");
$.config = require("./config");
$.taskList = require("./taskList");
$.libList = require("./libList");
$.prod = false;

$.taskList.forEach(taskSeria => {
    taskSeria.forEach(task =>
        $.gulp.task(task, require("./tasks/" + task + ".js"))
    );
});

$.gulp.task("prodFlag", function(done) {
    $.prod = true;
    return done();
});

$.gulp.task("watch", require("./tasks/watch.js"));
$.gulp.task("bs", require("./tasks/browser-sync.js"));

$.gulp.task(
    "default",
    $.gulp.series($.taskList.map(taskGroup => $.gulp.parallel(taskGroup)))
);

$.gulp.task("dev", $.gulp.series(["default", $.gulp.parallel("watch", "bs")]));
$.gulp.task(
    "dev-min",
    $.gulp.series(["prodFlag", "default", $.gulp.parallel("watch", "bs")])
);

$.gulp.task("prod", $.gulp.series(["prodFlag", "default"]));
