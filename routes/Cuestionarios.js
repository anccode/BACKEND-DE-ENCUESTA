const express = require("express");
const router = express.Router();
const { Cuestionarios } = require("../models");
const { validateToken } = require("../midlewares/Authmiddleware");


router.post("/", validateToken, async (req, res) => {
  const cuestionarios = req.body;
  cuestionarios.username = req.user.correo;
  cuestionarios.UserId = req.user.id;
  await Cuestionarios.create(cuestionarios);
  res.json(cuestionarios);
});
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const cuestionarios = await Cuestionarios.findAll({where:{ UserId: id }});
  res.json(cuestionarios);
});

module.exports = router;