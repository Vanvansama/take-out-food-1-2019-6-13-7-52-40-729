const orderDetail = require('../src/orderDetail')
it('should return orderDetail', () => {
  const input = { ITEM0001: 1, ITEM0013: 2, ITEM0022: 1 };
  // {ITEM0013: 4, ITEM0022: 1};
  // {ITEM0013: 4};

  const result = orderDetail(input);

  expect(result).toEqual(`黄焖鸡 x 1 = 18元
肉夹馍 x 2 = 12元
凉皮 x 1 = 8元
-----------------------------------`);
});