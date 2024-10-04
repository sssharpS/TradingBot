const express=require('express');
require('dotenv').config();
const port=process.env.PORT || 3030;
const app=express();
const {executeTrade}=require('./services/track');


//api/end point for start Trading in real-time
app.get('/start',(req,res)=>{
  res.send('Trading Bot Started');
  // execute trade in every second (real-time)
  setInterval(executeTrade,1000);
})

//server is up and running on some port
app.listen(port,()=>{
  console.log(`server is up and running on port ${port}`);
})

