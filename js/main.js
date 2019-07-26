'use strict'
/**
 * Main File for JS
 */

const keyLeft = 37;
const keyRight = 39;
const keySpace = 32;

let gameState = false;

const configs = {
  level: 1,
  points: 0,
  tileSpeed: 1000,
}

const startGame = () => {
  gameState = true;

  //Render Board
  renderBoard();

  //Start to drop the tiles
  startDropTiles();  
}