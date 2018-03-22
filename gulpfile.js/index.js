"use strict";

global.$ = require("gulp-load-plugins")();
$.gulp = require("gulp");
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

$.gulp.task(
    "default",
    $.gulp.series($.taskList.map(taskGroup => $.gulp.parallel(taskGroup)))
);

$.gulp.task("prod", $.gulp.series(["prodFlag", "default"]));
