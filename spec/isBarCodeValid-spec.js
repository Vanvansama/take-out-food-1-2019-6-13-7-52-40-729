const isBarCodeValid = require('../src/isBarCodeValid');

it('should return true when invoke isBarCodeValid given right barcode', () => {
  //given
  let inputs = ["ITEM0001 x 1", "ITEM0013 x 2", "ITEM0022 x 1"];
  //when
  let result = isBarCodeValid(inputs);
  //then
  expect(result).toBe(true)
});
