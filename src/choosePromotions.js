const loadAllItems = require('./items')
const loadPromotions = require('./promotions')

function choosePromotions(barcodesAndNumber, totalPrice) {
  const database = loadAllItems();
  const promotions = loadPromotions();
  let reducePrice = 0;
  let reduceName = "";
  for (const barcode in barcodesAndNumber) {
    if (barcodesAndNumber.hasOwnProperty(barcode)) {
      const number = barcodesAndNumber[barcode];
      promotions[1].items.forEach(promotionsBarcode => {
        if (promotionsBarcode === barcode) {
          database.forEach(data => {
            if (barcode === data.id) {
              reducePrice += (data.price/2)*number;
              reduceName += data.name+"，"
            }
          });
        }
      });
    }
  }
  if (totalPrice>30) {
    if (reducePrice > 6) {
      return `使用优惠:\n${promotions[1].type}(${reduceName.slice(0,reduceName.length-1)})，省${reducePrice}元\n-----------------------------------\n总计：${totalPrice-reducePrice}元\n===================================`;
    } else {
      return `使用优惠:\n${promotions[0].type}，省6元\n-----------------------------------\n总计：${totalPrice-6}元\n===================================`;
    }
  } else {
    if (reducePrice > 0) {
      return {type:promotions[1].type,reducePrice:reducePrice}
    } else {
      return `总计：${totalPrice}元\n===================================`
    }
  }
}

module.exports = choosePromotions;