const choosePromotions = require('../src/choosePromotions')

it('should return promotions type given barcode and number', () => {
  const input = { ITEM0001: 1, ITEM0013: 2, ITEM0022: 1 };
  // {ITEM0013: 4, ITEM0022: 1};
  // {ITEM0013: 4};
  const totalPrice = 38;

  const result = choosePromotions(input, totalPrice);

  expect(result).toEqual(`使用优惠:
指定菜品半价(黄焖鸡，凉皮)，省13元
-----------------------------------
总计：25元
===================================`);
});