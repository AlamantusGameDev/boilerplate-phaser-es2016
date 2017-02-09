'use strict';

// Change ENV to 'prod' to enable minify
const ENV = 'dev';

const path = require('path')
,   webpack = require('webpack')
;

const phaserModulePath = path.join(__dirname, '/node_modules/phaser/')
,   phaserPath = path.join(phaserModulePath, 'build/custom/phaser-split.js')
,   pixiPath = path.join(phaserModulePath, 'build/custom/pixi.js')
,   p2Path = path.join(phaserModulePath, 'build/custom/p2.js')
;

let webpackExport = {
    entry: {
        game: './app/main'
    // ,   optionalOtherBundle: './path/to/other/script'
    }

,   output: {
        path: './public/dist'
    ,   filename: '[name].bundle.js'
    }

,   module: {
        loaders: [
            {
                test: /phaser\.js$/
            ,   loader: 'script-loader'
            }
        ,   {
                test: /\.js$/
            ,   exclude: /node_modules/
            ,   loader: 'babel-loader'
            }
        ,   {
                test: /\.(json)$/
            ,   loader: 'json-loader'
            }
        ,   {
                test: /\.(mp3|wav|ogg)$/
            ,   loader: 'url-loader?name=./assets/audio/[name].[ext]?[hash]'
            }
        ,   {
                test: /\.(jpe?g|png)$/
            ,   loaders: [
                    'url-loader?limit=25000&name=./assets/images/[name].[ext]?[hash]'
                ,   'img-loader?progressive=true&optimizationLevel=5'
                ]
            }
        ]
    }

,   plugins: [
        new webpack.ProvidePlugin({
            PIXI: pixiPath
        ,   p2: p2Path
        ,   Phaser: phaserPath
        })
    ]
};

if (ENV === 'prod') {
    webpackExport.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
            ,   mangle: {
                except: ['webpackJsonp']
            }
            ,   output: {
                comments: false
            }
        })
    );
} else {
    webpackExport.devtool = 'source-map';
}

module.exports = webpackExport;
