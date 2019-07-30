/**
 * Commands to spin the elements
 */

const elementToTheRight = () => {
  if ((currentElement.position[currentElement.position.length - 1] + 1) % 10 !== 0) {
    currentElement.position = currentElement.position.map(x => x + 1);
  }

  renderElement();
}

const elementToTheLeft = () => {
  if (currentElement.position[0] % 10 !== 0) {
    currentElement.position = currentElement.position.map(x => x - 1);
  }

  renderElement();
}

const elementSpin = () => {
  switch (currentElement.type) {
    case "I":

      if (currentElement.orientation === 0) {
        currentElement.position[0] -= 9;
        currentElement.position[2] += 9;
        currentElement.position[3] += 18;

        currentElement.orientation = 1;
      } else {
        currentElement.position[0] += 9;
        currentElement.position[2] -= 9;
        currentElement.position[3] -= 18;

        currentElement.orientation = 0;
      }

      break;

    default:
      break;
  }
}