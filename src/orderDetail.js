const loadAllItems = require('./items');

function orderDetail(barcodesAndNumber) {
  const database = loadAllItems();
  let message = "";
  for (const barcode in barcodesAndNumber) {
    if (barcodesAndNumber.hasOwnProperty(barcode)) {
      const number = barcodesAndNumber[barcode];
      database.forEach(data => {
        if (data.id === barcode) {
          message += `${data.name} x ${number} = ${data.price*number}元\n`;
        }
      });
    }
  }
  message += `-----------------------------------`;
  return message;
}

module.exports = orderDetail;