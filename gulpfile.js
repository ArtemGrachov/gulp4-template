const gulp = require("gulp");
const config = require("./gulp-config");

gulp.task("default", function() {
    console.log("test", JSON.stringify(config));
    return gulp.src("/");
});
