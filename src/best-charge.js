const calculateTotalPrice = require('./calculateTotalPrice')
const choosePromotions = require('./choosePromotions')
const countBarcodeNumbers = require('./countBarcodeNumbers')
const isBarCodeValid = require('./isBarCodeValid')
const orderDetail = require('./orderDetail')


function bestCharge(selectedItems) {
  if (isBarCodeValid(selectedItems)) {
    const barcodeAndNumbers = countBarcodeNumbers(selectedItems);
    const totalPrice = calculateTotalPrice(barcodeAndNumbers);
    const PromotionsMessage = choosePromotions(barcodeAndNumbers,totalPrice)
    const message = orderDetail(barcodeAndNumbers);
    console.log(PromotionsMessage);
    let Receipts = `============= 订餐明细 =============\n${message}\n${PromotionsMessage}\n`;
    return Receipts;
  }else {
    return null;
  }
}

module.exports = bestCharge;