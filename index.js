const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const PORT = 3000 

const {mogoUrl} = require('./keys')

require('./models/User');

mongoose.connect(mogoUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected',()=>{
    console.log("connected to mongo  yeah")
})
mongoose.connection.on('error',(err)=>{
    console.log("this is error",err)
})

app.use(bodyParser.json())


app.post('/',(req,res) => {
    console.log(req.body)
    res.send('hola')
})


app.listen(PORT,()=> {
    console.log('server running' + PORT)
})