const express=require('express');
require('dotenv').config();
const port=process.env.PORT || 3030;
const app=express();


//route-level middlewares
app.use('/api',require('./routes/apiRoutes'));


//server is up and running on some port
app.listen(port,()=>{
  console.log(`server is up and running on port ${port}`);
})

