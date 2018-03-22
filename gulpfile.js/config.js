module.exports = {
    source: {
        dir: "src",
        pages: "/pages",
        pug: { dir: "/pug", mixins: "/mixins", includes: "/includes" },
        scripts: { dir: "/scripts", order: ["/main.js", "/**/*.js"] },
        styles: "/styles/main.scss",
        assets: {
            dir: "/assets",
            img: "/img/",
            fonts: "/fonts/"
        }
    },
    libs: {
        scripts: [],
        styles: []
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
