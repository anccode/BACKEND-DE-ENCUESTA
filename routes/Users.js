const express = require('express');
const router = express.Router();
const {Users} = require('../models');
const bcrypt = require("bcrypt");

router.post("/", async (req,res) => {
    const {username,password} = req.body; 
    bcrypt.hash(password,10).then((hash)=>{
        Users.create({
            username: username,
            password: hash,
        });
        res.json("succes");
    });
});

router.post("/login", async(req,res)=>{

    const {username, password} = req.body;  
    const user = await Users.findOne({ where: {username: username } });

    if(!user) res.json({error: "usuario no existe"});

    bcrypt.compare(password, user.password).then((match)=>{

        if(!match) res.json({error: "tu usuario y tu contraseña es incorrecto"});

        res.json("Iniciaste session");
    });

});

module.exports = router