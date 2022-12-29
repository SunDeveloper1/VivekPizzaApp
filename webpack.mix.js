// webpack.mix.js

let mix = require('laravel-mix');

mix.js('./resources/js/app.js', './public/js/app.js').sass('./resources/scss/app.scss','./public/css/app.css')


/*
sccs and js inside resource folder
need to compiled and stored into
public css and js

This is done so that all browser
support the new es6 syntax and 
*/