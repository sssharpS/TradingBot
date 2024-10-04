const { isBuy, isSell } = require('../services/strategy');
const { getMockStockPrice } = require('../services/mock');

let balance = 1000;
let stocksOwned = 0;
let buyPrice = 0;

function executeTrade() {
  const stock = getMockStockPrice();
  const currentPrice = stock.price;

  if (isBuy(currentPrice) && balance >= currentPrice) {
    stocksOwned = balance / currentPrice;
    buyPrice = currentPrice;
    balance = 0;
    console.log(`Bought stock at ${buyPrice}`);
  } else if (isSell(currentPrice) && stocksOwned > 0) {
    balance = stocksOwned * currentPrice;
    console.log(`Sold stock at ${currentPrice}, Profit: ${balance - 1000}`);
    stocksOwned = 0;
  }
  console.log(`Current balance: ${balance}, Stocks owned: ${stocksOwned}`);
}

module.exports = {executeTrade};
