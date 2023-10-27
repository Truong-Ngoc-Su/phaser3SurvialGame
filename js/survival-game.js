// import PhaserMatterCollisionPlugin from "PhaserMatterCollisionPlugin"
// import 'phaser';
import * as Phaser from 'phaser'
import xx from 'phaser-matter-collision-plugin';

import MainScene from "./MainScene.js";
import InventoryScene from "./InventoryScene.js";
import CraftingScene from "./CraftingScene.js";


const config = {
  width:512,
  height:512,
  backgroundColor: '#999999',
  type: Phaser.AUTO,
  parent: 'survival-game',
  // scene:[MainScene,InventoryScene,CraftingScene],
  scene:[MainScene,InventoryScene, CraftingScene],
  scale: {
    zoom:2,
  },
  physics: {
    default: 'matter',
    fps:10,
    matter: {
      debug:false,
      gravity:{y:0},
    }
  },
  plugins: {
    scene:[
      {
        plugin: xx,
        key: 'matterCollision',
        mapping: 'matterCollision',
        start: true
      }
    ]
  }
}

new Phaser.Game(config);