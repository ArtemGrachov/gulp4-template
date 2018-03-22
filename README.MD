# Gulp 4 Template

## NPM commands
```
npm run build
```
build project
```
npm run dev
```
development mode (Browser-Sync + autoreload on change)
```
npm run prod
```
production mode (minifying .js, .css)
```
npm run dev-min
```
development mode with minifying .js and .css files

## Template configuration
Template configuration placed in /gulpfile.js/config.js
## Template structure
Template structure based on default configuration
* dist - project build
    * assets
        * fonts
        * img
    * index.html
    * main.js
    * style.css
    * libs.css
    * libs.js
* src - project source
    * assets
        * fonts
        * img
    * pug
        * mixins - directory for Pug mixins
        * pages
        * parts - directory for includes
            * common - common layout parts (header, sidebar, footer etc.)
            * (pagename #1)
            * (pagename #2)
            * ...
        * templates
            * page.pug - template with HTML5 layout, scripts and styles tags
            * common.pug - template for content layout
    * scripts
    * styles - .scss style sheets with icons.css for SVG sprites
    * svg-sprites
* gulpfile.js
    * tasks
    * config.js - configuration file
    * index.js - main file
    * libList.js - list of CSS and JS libs
    * taskList.js - task list

## Packages, libraries etc. used in template:
* JS:
    * jQuery
* CSS:
    * normalize.css
* Fonts:
    * Oswald

## ToDo:
* error notification
* image cache
* .js, .html, .css import in webpack-style way
## Done:
* PUG -> HTML
* SCSS -> CSS
* image minification
* encapsulating .js
* .js, .css minification
* ES6 -> JS
* production mode
* fonts task
* dev mode
* SVG sprites
* libs
* pug and scss templates, includes mixins .etc for quick start
## Cancelled
* environments
* TS -> JS