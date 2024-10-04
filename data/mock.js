let currentPrice = 100;

function getMockStockPrice() {
// Random fluctuation
 const ran = Math.random() * 4 - 2; // Random fluctuation between -1 and +1
  currentPrice += ran;
  currentPrice = parseFloat(currentPrice.toFixed(2));
  console.log(`Price changed by ${ran.toFixed(2)}, new price: ${currentPrice}`);
  return { price: currentPrice, timestamp: new Date() };
}

module.exports = { getMockStockPrice} ;
