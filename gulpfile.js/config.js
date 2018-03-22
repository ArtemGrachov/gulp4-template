module.exports = {
    source: {
        dir: "src",
        pages: "/pages",
        pug: { dir: "/pug/", mixins: "/mixins/", includes: "/includes/" },
        scripts: { dir: "/scripts/", order: ["main.js", "**/*.js"] },
        styles: {
            dir: "/styles/",
            root: "main.scss",
            autoprefixer: [
                "last 15 version",
                "> 1%",
                "ie 9",
                "ie 10",
                "ie 11",
                "Opera 12.1"
            ]
        },
        assets: {
            dir: "/assets",
            img: "/img/",
            fonts: "/fonts/"
        }
    },
    dist: {
        dir: "dist",
        min: ".min",
        lib: ".lib",
        scripts: "main",
        styles: "style",
        assets: {
            dir: "",
            img: "/img/",
            fonts: "/fonts/"
        }
    }
};
