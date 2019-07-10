const countBarcodeNumbers = require('../src/countBarcodeNumbers')
it('should return barcode and number given barcodes array', () => {
    const inputs = ["ITEM0001 x 1", "ITEM0013 x 2", "ITEM0022 x 1"];

    const result = countBarcodeNumbers(inputs);

    expect(result).toEqual({ ITEM0001: 1, ITEM0013: 2, ITEM0022: 1 })
});