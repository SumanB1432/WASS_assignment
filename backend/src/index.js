const express = require("express");
const cors = require("cors");
const app = express();
const dotnev = require("dotenv").config();
require("../db/config");
const item = require("../db/item");

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("app is working")
})

app.post("/app/items",async(req,res)=>{
    try {
        let data = req.body;
        console.log(data)
        if(!data){
            res.status(400).send("Please provide Items details!")
        }
        let insertItem = await item.create(data);
        if(insertItem){
            console.log("hello")
            res.status(201).send("Item Created Successfully")
        }
        else{
            res.status(400).send("Something Wrong!")
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