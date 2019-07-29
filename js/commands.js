/**
 * Commands to spin the elements
 */

const elementToTheRight = () => {
  currentElement.position = currentElement.position.map(x => x + 1);
  
  renderElement();
}

const elementToTheLeft = () => {
  currentElement.position = currentElement.position.map(x => x - 1);
  
  renderElement();
}