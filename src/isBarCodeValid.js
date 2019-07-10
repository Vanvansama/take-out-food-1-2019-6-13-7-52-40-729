const loadAllItems = require('./items');

function isBarCodeValid(barcodes) {
  const database = loadAllItems();
  let flag = true;
  const barcodeList = database.map(data => data.id);
  barcodes.map((barcode) => barcode.slice(0, 8)).forEach(barcode => {
    if (barcodeList.indexOf(barcode) === -1) {
      flag = false;
    }
  });
  return flag;
}

module.exports = isBarCodeValid;