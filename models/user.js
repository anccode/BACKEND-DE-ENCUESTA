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
        unique:true
    },
    password:{
        type: String,
        requierd: true
    },
    avatar: Buffer,
})

userSchema.statics.isThisEmailInUse = async function(email){
    if(!email) throw new Error('Invalid email');
    try {
        const user = await this.findOne({ email });
        if (user) return false
        return true;
    } catch (error) {
        console.log('error inside isThisEmailInUse method', error.message);
        return false;   
    }   
};

module.exports = mongoose.model('User', userSchema)