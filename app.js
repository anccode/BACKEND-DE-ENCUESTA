const express = require('express');
require('dotenv').config();

require('./models/db');
const User = require('./models/user');

const app = express();

email = 'angel2';

app.post('/create-user', async(req,res) => {
    const isNewUser = await User.isThisEmailInUse(email);
    if(!isNewUser) 
        return res.json({
            success:false, 
            message:'this email is already in use, try sign-in'
    });

    const user = await User({
        fullname: '    ', 
        email:email,
        password:'    '
    });
    await user.save();
    res.json(user);
})

app.get('/', (req,res)=>{
    res.send('<h1>Hola</h1>')
} )

app.listen(3000,()=>{
    console.log('port in listening');
})