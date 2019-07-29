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

      currentElement.position = positions;
      currentElement.color = color;
      currentElement.active = true;
      
      // initiate callback
      if (callback !== null) callback();

      break;

    default:
      break;
  }
}

const startFalling = () => {
  currentElement.falling = true;

  setInterval(() => {
    currentElement.position = currentElement.position.map(x => x + 10);    

    renderElement();
  }, configs.tileSpeed);
}

const renderElement = () => {
  clearActiveTetromino();

  currentElement.position.forEach((each) => {
    $("#block" + each).addClass("tetrominoActive");
    $("#block" + each).css("background-color", currentElement.color);
  });
}

const clearActiveTetromino = () => {
  $(".tetrominoActive").css("background-color", "");
}