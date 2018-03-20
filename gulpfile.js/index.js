"use strict";

global.$ = require("gulp-load-plugins")();
$.gulp = require("gulp");
$.config = require("./config");
$.taskList = require("./taskList");

$.taskList.forEach(taskSeria => {
    taskSeria.forEach(task =>
        $.gulp.task(task, require("./tasks/" + task + ".js"))
    );
});

$.gulp.task("default", $.gulp.series(
    $.taskList.map(taskGroup => $.gulp.parallel(taskGroup))
));
