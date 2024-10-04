const express=require('express');
const {startBot,getProfitLoss}=require('../controllers/tradingController');
const  router=express.Router();

//create end point or api for start Trading in real-time
router.get('/start',startBot);

//end point for showing profit/loss while executing several Trades
router.get('/profit-loss',getProfitLoss);


module.exports=router;