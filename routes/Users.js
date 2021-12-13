const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { validateToken } = require("../midlewares/Authmiddleware");

router.post("/", async (req, res) => {
  const { username, password, correo, peso,estatura } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      correo: correo, 
      peso: peso,  
      estatura: estatura, 
      password: hash,
    });
    res.json("SUCCESS");
  });
});

router.post("/login", async (req, res) => {
  const { correo, password  } = req.body;
  const user = await Users.findOne({ where: { correo: correo } });

  if (!user) res.json({ error: "usuario no existe" });

  bcrypt.compare(password, user.password).then(async (match) => {
    if (!match) res.json({ error: "tu usuario y tu contraseña es incorrecto" });

    const accessToken = sign(
      { correo: user.correo, id: user.id },
      "importantsecret"
    );

    res.json({ token: accessToken, correo: correo, id: user.id });
  });
});

router.get("/auth", validateToken, (req, res) => {
  res.json(req.user); 
});
 
router.get("/basicinfo/:id", async (req, res) => {
  const id = req.params.id;
  const basicInfo = await Users.findByPk(id, {
    attributes: { exclude: ["password"] },
  });
  res.json(basicInfo);
});
 
router.put("/changepassword", validateToken, async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const user = await Users.findOne({ where: { correo: req.user.correo } });

  bcrypt.compare(oldPassword, user.password).then(async (match) => {
    if (!match) res.json({ error: "Wrong Password Entered!" });

    bcrypt.hash(newPassword, 10).then((hash) => {
      Users.update(
        { password: hash },
        { where: { correo: req.user.correo } }
      );
      res.json("SUCCESS");
    });
  });
});  

module.exports = router;
