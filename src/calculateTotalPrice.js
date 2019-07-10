const loadAllItems = require('./items')
function calculateTotalPrice(barcodeAndNumbers) {
  let price = 0;
  const database = loadAllItems();
  for (const barcode in barcodeAndNumbers) {
    if (barcodeAndNumbers.hasOwnProperty(barcode)) {
      const number = barcodeAndNumbers[barcode];
      database.forEach(data => {
        if (data.id === barcode) {
          price += data.price * number;
        }
      });
    }
  }
  return price;
}

module.exports = calculateTotalPrice;