const express = require('express');
require('dotenv').config()

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('yeahh database correct')
}).catch(err=> console.log(err.message))

const app = express()

app.get('/', (req,res)=>{
    
} )

app.listen(8000,()=>{
    console.log('port in listening');
})