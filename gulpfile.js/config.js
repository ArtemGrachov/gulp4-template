module.exports = {
    source: {
        dir: "src",
        pages: "/pages",
        pug: { dir: "/pug", mixins: "/mixins", includes: "/includes" },
        scripts: { dir: "/scripts", order: ["/main.js", "/**/*.js"] },
        style: "/styles/main.scss",
        assets: {
            dir: "/assets",
            images: "/img/"
        }
    },
    libs: {
        scripts: [],
        styles: []
    },
    dist: {
        dir: "dist",
        scripts: "main",
        styles: "style",
        lib: ".lib",
        assets: {
            dir: "/assets",
            img: "/img/"
        }
    }
};
