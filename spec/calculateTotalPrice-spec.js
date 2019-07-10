const calculateTotalPrice = require('../src/calculateTotalPrice');

it('should return total price given barcode and number', () => {
  const input = { ITEM0001: 1, ITEM0013: 2, ITEM0022: 1 };

  const result = calculateTotalPrice(input);

  expect(result).toBe(38)
});