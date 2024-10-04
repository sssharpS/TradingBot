const { isBuy, isSell } = require('../services/strategy');
const { getMockStockPrice } = require('../data/mock');

let balance = 1000;
let stocksOwned = 0;
let buyPrice = 0;

function executeTrade() {
  const stock = getMockStockPrice();
  const currentPrice = stock.price;

  console.log(`Current Stock Price: $${currentPrice}`);

  if (isBuy(currentPrice) && balance >= currentPrice) {
    stocksOwned = balance / currentPrice;
    buyPrice = currentPrice;
    balance = 0;
    console.log(`Bought stock at $${buyPrice.toFixed(2)}`);
  } else if (isSell(currentPrice) && stocksOwned > 0) {
    balance = stocksOwned * currentPrice;
    console.log(`Sold stock at $${currentPrice.toFixed(2)}, Profit: $${(balance - 1000).toFixed(2)}`);
    stocksOwned = 0;
  }
  console.log(`Current Balance: $${balance.toFixed(2)}, Stocks Owned: ${stocksOwned.toFixed(2)}`);
}

function getReport() {
  return {
    balance: balance.toFixed(2),
    stocksOwned: stocksOwned.toFixed(2),
    profit: (balance - 1000).toFixed(2), // Assuming initial balance was $1000
  };
}

module.exports = {executeTrade,getReport};
