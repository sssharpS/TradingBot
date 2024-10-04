const {executeTrade,getReport}=require('../services/track');

let botInterval;
module.exports.startBot=(req,res)=>{
    if (!botInterval) {
        botInterval = setInterval(executeTrade, 1000); // Execute trade every second
        res.send('Trading bot started.');
      } else {
        res.send('Trading bot is already running.');
      }
};

module.exports.getProfitLoss=(req,res)=>{
 const report = getReport();
  res.json(report);
}