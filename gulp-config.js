module.exports = {
    source: {
        dir: "/src",
        pages: "/pages",
        pug: "/pug",
        script: "/scripts/main.js",
        style: "/styles/main.scss",
        assets: {
            dir: "/assets",
            images: "/img"
        }
    },
    libs: {
        scripts: [],
        styles: []
    },
    output: {
        dir: "/dist",
        script: "main.min.js",
        style: "style.min.js",
        libs: "libs"
    }
};
