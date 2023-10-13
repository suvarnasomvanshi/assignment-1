import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./route";




dotenv.config();
const app = express();
const port  = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{console.log('connected to database')})
.catch((err)=>{console.log(err)})


app.use('/api',router);



app.listen({port},()=>{
    console.log(`listening to port ${port}`)
})
