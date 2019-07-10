function countBarcodeNumbers(barcodes) {
  return barcodes.reduce((object, barcode) => {
    const barcodeAndNumber = barcode.split(' x ');
    if (object[barcodeAndNumber[0]]) {
      object[barcodeAndNumber[0]] += parseInt(barcodeAndNumber[1]);
    } else {
      object[barcodeAndNumber[0]] = parseInt(barcodeAndNumber[1]);
    }
    return object
  }, {});
}

module.exports = countBarcodeNumbers;