const choosePromotions = require('../src/choosePromotions')

it('should return promotions type given barcode and number', () => {
  const input = { ITEM0001: 1, ITEM0013: 2, ITEM0022: 1 };

  const result = choosePromotions(input);

  expect(result).toEqual("指定菜品半价");
});