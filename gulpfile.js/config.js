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
        scripts: "main.min.js",
        styles: "style.min.js",
        libs: {
            scripts: "libs.min.js",
            styles: "libs.min.css"
        },
        assets: {
            dir: "/assets",
            img: "/images"
        }
    }
};
