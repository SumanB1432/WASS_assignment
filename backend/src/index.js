const express = require("express");
const cors = require("cors");
const app = express();
const dotnev = require("dotenv").config();
require("../db/config")

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("app is working")
})

app.post("POST/app/items",async(req,res)=>{
    try {
        let data = req.body;
        if(!data){
            res.status(400).send("Please provide Items details!")
        }
        
    } catch (error) {
        if(error){
            res.status(500).send("Internal Server Error!")
        }
    }
})

app.listen(process.env.PORT,(err)=>{
    if(!err){
        console.log(`SERVER RUN ON ${process.env.PORT}`)
    }

})