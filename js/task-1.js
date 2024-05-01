function isEnoughCapacity(products, containerSize) {
  return Object.values(products).reduce((total, product) => total + parseInt(product), 0) <= containerSize;
}

const testTask1 = () => {
  document.getElementById('result').innerHTML = '';

  logOutput(isEnoughCapacity, { apples: 2, grapes: 3, carrots: 1 }, 8); // true
  logOutput(isEnoughCapacity, { apples: 4, grapes: 6, lime: 16 }, 12); // false
  logOutput(isEnoughCapacity, { apples: 1, lime: 5, tomatoes: 3 }, 14); // true
  logOutput(isEnoughCapacity, { apples: 18, potatoes: 5, oranges: 2 }, 7); // false
};
