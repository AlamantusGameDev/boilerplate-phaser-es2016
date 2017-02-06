# Phaser-ES2016-Webpack Boilerplate

:star2: Start a Phaser.js project using Webpack and ECMAScript 2016 syntax.

## Features &#x2714;

* [x] Phaser v2.6.2
* [x] Webpack v2.2.1
* [x] Babel (ECMAScript 2015 + ECMAScript 2016 + Stage 0 of ECMAScript 2017)
* [x] [super-event-emitter](http://github.com/piecioshka/super-event-emitter)
 v4.1.4 as event management
* [x] Typings (Phaser, super-event-emitter) for syntax highlighters
* [x] Task for count line of code (LOC)
* [x] Simple structure for app: `constants/`, `models/`, `states/`
* [x] Example map (build in Tiled)
* [x] Static directory: `public/`
* [x] Pack all images (PNGs &amp; JPGs under 25kb) and Tiled map files (JSON)
 into a single bundle.

![Screenshot](./screenshots.png)

## Steps to bootstrap

```
$ npm install       # install dependencies
$ npm run build     # build distribution files in public/dist/
```

or [Yarn](https://yarnpkg.com/lang/en/) can be used instead of npm in all
 cases as shown below:

```
$ yarn      # install dependencies
$ yarn run build    # build distribution files in public/dist/
```
 
 **Note:** To enable minification on builds, set `ENV = 'prod'` in `webpack.config.js`

## Development

```
$ npm run typings   # support syntax highlighters
$ npm run watch     # run Webpack to listen of file modifications
```

## Misc

```
$ npm run count      # count lines of code (Linux and OSX)
$ npm run count-cmd  # count lines of code, excluding empty lines (Windows)
$ npm run clear      # remove all dist files (Linux and OSX)
$ npm run clear-cmd  # remove all dist files (Windows)
$ npm run clear-project      # remove all project files (Linux and OSX)
$ npm run clear-project-cmd  # remove all project files (Windows)
```

**Note:** If you want a true LOC count excluding comments and blank lines, use this command in Powershell:

```
(dir .\app -include *.js -recurse | select-string "^(\s*)//" -notMatch | select-string "^(\s*)$" -notMatch).Count
```

## Troubleshooting

### `Uncaught TypeError: Cannot read property 'cache' of undefined`

Player sprite does not have reference to main game object.

```javascript
new Player();           // ERROR
new Player(this.game);  // OK
```

### `Uncaught TypeError: Failed to execute 'drawImage' on 'CanvasRenderingContext2D': The provided value is not of type '(HTMLImageElement or HTMLVideoElement or HTMLCanvasElement or ImageBitmap)'`

List of used tileset in map should be defined after map setup.

```javascript
this.map = this.add.tilemap('example-map');
this.map.addTilesetImage('street');     // MUST BE ADDED
```

### Audio Files

Import audio files to get their path and use the path variable to call the audio file,
  the same way as images in `/app/states/loading-state.js`.

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2016
