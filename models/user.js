const mongoose = require('mongoose');

const user = {
    fullname: '',
    email:'',
    password: '',
    avatar:''

}

const userSchema = new mongoose.Schema({
    fullname:{
        type: String,
        requierd: true

    },
    email:{
        type: String,
        requierd: true,
    },
    password:{
        type: String,
        requierd: true
    },
    avatar: buffer,
})
