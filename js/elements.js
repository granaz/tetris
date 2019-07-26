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
  const colors = ['red', 'turquoise', 'yellow', 'green'];

  createElement("I", colors[Math.floor(Math.random()*4)], startFalling);
}

const createElement = (format, color, callback = null) => {
  switch (format) {
    case "I":
      const positions = [3, 4, 5, 6];

      positions.forEach((each) => {
        renderElement(each, color);
      });

      // initiate callback
      if (callback !== null) callback(positions, color);

      break;

    default:
      break;
  }
}

const startFalling = (positions, color) => {
  let newPos = [...positions];

  setInterval(() => {
    clearActiveTetromino();

    newPos = newPos.map(x => x + 10);

    newPos.forEach((each) => {
      renderElement(each, color);
    });
  }, configs.tileSpeed);
}

const renderElement = (elem, color) => {
  $("#block" + elem).addClass("tetrominoActive");
  $("#block" + elem).css("background-color", color);
}

const clearActiveTetromino = () => {
  $(".tetrominoActive").css("background-color", "");
}