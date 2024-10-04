// Initial stock price
const initialPrice = 100; 

function isBuy(currentPrice) {
    // 2% drop
  return currentPrice <= initialPrice * 0.98; 
}

function isSell(currentPrice) {
     // 3% rise
  return currentPrice >= initialPrice * 1.03;
}

module.exports = { isBuy, isSell };
