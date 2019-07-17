'use strict'
/**
 * Render Board, aka the ground
 */
const renderBoard = () => {
  for (let i = 0; i < 200; i++) {
    $("#area").append("<span id='block" + i + "' class='block'></span>")
  }
}

/**
 * Drop the tiles!
 * 
 * Each tile must be generated as soon as the predecessor hits the bottom.
 */
const startDropTiles = () => {
  const formats = ['I', 'O', 'T', 'S', 'Z', 'J', 'L'];
  const colors = ['red', 'blue', 'yellow', 'green'];

  dropTile("I", 'red');
}

const dropTile = (format, color) => {
  createElement(format, color);

  setInterval(() => {
    
  }, configs.tileSpeed);
}

const createElement = (format, color) => {  
  switch (format) {
    case "I":
      const positions = [3,4,5,6];

      positions.forEach((each) => {
        $("#block"+each).addClass("tetrominoActive");
        $("#block"+each).css("background-color", color);
      });

      break;
  
    default:
      break;
  }
}