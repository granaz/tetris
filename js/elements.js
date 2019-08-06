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
const dropTile = () => {
  // 'O', 'T', 'S', 'Z', 'L'
  const formats = ['I', 'J'];
  const colors = ['red', 'turquoise', 'yellow', 'green'];

  createElement(formats[Math.floor(Math.random() * 2)], colors[Math.floor(Math.random() * 4)], startFalling);
}

const createElement = (format, color, callback = null) => {
  currentElement.color = color;
  currentElement.active = true;
  currentElement.type = format;

  switch (format) {
    case "I":
      currentElement.position = [3, 4, 5, 6];

      break;

    case "J":
      currentElement.position = [3, 13, 14, 15];

      break;

    default:
      break;
  }

  // initiate callback
  if (callback !== null) callback();
}

const startFalling = () => {
  currentElement.falling = true;

  let idInterval = setInterval(() => {
    // calculate next step;
    let isItAble = calculateNextStep();

    if (isItAble) {
      currentElement.position = currentElement.position.map(x => x + 10);
      renderElement();
    } else {
      // Clear the interval, reset the currentElement object and start to drop the next tile
      clearInterval(idInterval);
      currentElement.falling = false;
      currentElement.active = false;
      currentElement.orientation = 0;

      currentElement.position.forEach((pos) => {
        $("#block" + pos).addClass("tetrominoDeactive");
        $(".block").removeClass("tetrominoActive");
      })

      // Start the dropping action
      dropTile();
    }
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
  $(".block").removeClass("tetrominoActive");
}

const calculateNextStep = () => {
  let returnedValue = true;

  currentElement.position.forEach((pos) => {
    let exists = $("#block" + (pos + 10));

    if (exists.length === 0) returnedValue = false;

    if (exists.hasClass("tetrominoDeactive")) returnedValue = false;
  });

  return returnedValue;
}