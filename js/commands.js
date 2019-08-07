/**
 * Commands to spin the elements
 */
'use strict'

const elementToTheRight = () => {
  let able = true;

  for (let i = 0; i < currentElement.position.length; i++) {
    if ((currentElement.position[i] + 1) % 10 === 0) {
      able = false;
      break;
    }
  }

  if (able) {
    currentElement.position = currentElement.position.map(x => x + 1);
    renderElement();
  }
}

const elementToTheLeft = () => {
  let able = true;

  for (let i = 0; i < currentElement.position.length; i++) {
    if (currentElement.position[i] % 10 === 0) {
      able = false;
      break;
    }
  }

  if (able) {
    currentElement.position = currentElement.position.map(x => x - 1);
    renderElement();
  }
}

const elementSpin = () => {
  switch (currentElement.type) {
    case "I":
      if (currentElement.orientation === 0) {
        if (!(currentElement.position[currentElement.position.length - 1] + 1) % 10 !== 0) {
          currentElement.position[1] -= 9;
          currentElement.position[2] -= 18;
          currentElement.position[3] -= 27;
        } else {
          currentElement.position[0] -= 9;
          currentElement.position[2] += 9;
          currentElement.position[3] += 18;
        }

        currentElement.orientation = 1;
      } else {
        if (!(currentElement.position[0] % 10 !== 0)) {
          currentElement.position[1] -= 9;
          currentElement.position[2] -= 18;
          currentElement.position[3] -= 27;
        } else {
          currentElement.position[0] += 9;
          currentElement.position[2] -= 9;
          currentElement.position[3] -= 18;
        }

        currentElement.orientation = 0;
      }

      break;

    case "J":
      if (currentElement.orientation === 0) {
        currentElement.position[0] += 11;
        currentElement.position[2] += 9;
        currentElement.position[3] += 18;

        currentElement.orientation = 1;
      } else if (currentElement.orientation === 1) {
        currentElement.position[0] += 9;
        currentElement.position[2] -= 11;
        currentElement.position[3] -= 22;

        currentElement.orientation = 2;
      } else if (currentElement.orientation === 2) {
        currentElement.position[0] -= 11;
        currentElement.position[2] -= 9;
        currentElement.position[3] -= 18;

        currentElement.orientation = 3;
      } else {
        currentElement.position[0] -= 9;
        currentElement.position[2] += 11;
        currentElement.position[3] += 22;

        currentElement.orientation = 0;
      }

      break;

    case "L":
      if (currentElement.orientation === 0) {
        currentElement.position[0] -= 11;
        currentElement.position[2] += 9;
        currentElement.position[3] += 18;

        currentElement.orientation = 1;
      } else if (currentElement.orientation === 1) {
        currentElement.position[0] -= 9;
        currentElement.position[2] -= 11;
        currentElement.position[3] -= 22;

        currentElement.orientation = 2;
      } else if (currentElement.orientation === 2) {
        currentElement.position[0] += 11;
        currentElement.position[2] -= 9;
        currentElement.position[3] -= 18;

        currentElement.orientation = 3;
      } else {
        currentElement.position[0] += 9;
        currentElement.position[2] += 11;
        currentElement.position[3] += 22;

        currentElement.orientation = 0;
      }

      break;

    default:
      break;
  }

  renderElement();
}