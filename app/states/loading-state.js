import STATE_EVENTS from '../constants/state-events';

// Images and maps loaded this way will be packed with the main game bundle
// and their paths handled automatically when using the variable specified.
import playerImagePath from '../assets/images/player.png';
import backgroundImagePath from '../assets/images/background.png';
import exampleMapJSONPath from '../assets/maps/example-map.json';

export class LoadingState extends Phaser.State {
    preload() {
        let loader = this.add.image(this.world.centerX, this.world.centerY, 'loader');
        loader.anchor.set(0.5, 0.5);
        this.load.setPreloadSprite(loader);

        this.load.image('player', playerImagePath);
        this.load.image('background', backgroundImagePath);
        this.load.tilemap('example-map', exampleMapJSONPath, null, Phaser.Tilemap.TILED_JSON);
    }

    create() {
        this.time.events.add(500, () => {
            this.game.trigger(STATE_EVENTS.LOADING_COMPLETED);
        });
    }

    update() {

    }

    render() {

    }
}
