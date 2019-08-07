/**
 * Main File for JS
 */
'use strict'

const keyLeft = 37;
const keyRight = 39;
const keySpace = 32;
const keyEnter = 13;

let gameState = false;

let currentElement = {
  position: [],
  falling: false,
  active: false,
  color: "",
  type: "",
  orientation: 0
};

const configs = {
  level: 1,
  points: 0,
  tileSpeed: 250,
  debug: false
}

const startGame = () => {
  gameState = true;

  //Render Board
  renderBoard();

  //Start to drop the tiles
  dropTile();  
}