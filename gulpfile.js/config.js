module.exports = {
    source: {
        dir: "src/",
        pug: { dir: "pug/", pages: 'pages/' },
        scripts: { dir: "scripts/", order: ["main.js", "**/*.js"] },
        styles: {
            dir: "styles/",
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
        svgSprite: {
            dir: "svg-sprites/",
            output: "styles/",
            filename: "icons",
            prefix: "icon-"
        },
        assets: {
            dir: "assets/",
            img: "img/",
            fonts: "fonts/"
        }
    },
    dist: {
        dir: "dist/",
        min: ".min",
        libs: "libs",
        scripts: "main",
        styles: "style",
        assets: {
            dir: "assets/",
            img: "img/",
            fonts: "fonts/"
        }
    }
};
