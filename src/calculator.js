const calculator = (() => {
  const add = (x, y) => x + y;
  const substract = (x, y) => x - y;
  const multiply = (x, y) => x * y;
  const divide = (x, y) => {
    if (y === 0) throw new Error('can\'t divide by zero');
    return x / y;
  };
  return { add, substract, multiply, divide };
})();

export default calculator;
