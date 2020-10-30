const mix = require('laravel-mix');

// https://laravel-mix.com/extensions/html-builder
require('mix-html-builder');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .options({
        //processCssUrls: false
    })
    /*.webpackConfig({
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default']
            })
        ]
    })*/
    //.sourceMaps()
    //.version()
    .setPublicPath('dist')
    .html({
        output: '',
        partialRoot: './src',
        layoutRoot: './src',
    })
    //.copy('src/*.html', 'dist')
    .sass('src/scss/app.scss', 'dist/css')
    .js('src/app.js', 'dist/js')
    .autoload({
        jquery: ['$', 'window.jQuery']
    })
    .browserSync({
        server: 'dist',
        proxy: null,
        port: 8888,
        files: [
            'dist/**/*.(js|css|html|vue)'
        ],
        //open: 'ui',
    })
;