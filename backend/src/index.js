const express = require("express");
const cors = require("cors");
const app = express();
const dotnev = require("dotenv").config();



app.listen(process.env.PORT,(err)=>{
    if(!err){
        console.log(`SERVER RUN ON ${process.env.PORT}`)
    }

})