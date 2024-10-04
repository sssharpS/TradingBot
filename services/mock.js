let curr_price = 100;

function getMockStockPrice() {
// Random fluctuation
  const ran= (Math.random() * 2 - 1).toFixed(2); 
  curr_price = parseFloat((curr_price + parseFloat(ran)).toFixed(2));
  return { price: curr_price, timestamp: new Date() };
}

module.exports = { getMockStockPrice} ;
