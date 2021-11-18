const mongoose = require('mongoose');

mongoose
.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
}).then(()=>{
    console.log('yeahh database correct')
}).catch(err => console.log(err.message))