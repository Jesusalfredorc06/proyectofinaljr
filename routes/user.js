const express = require('express');
const adminSchema = require("../models/user");
const router = express.Router();

// Crear usuario
router.post('/users', (req, res) => {
  const user = adminSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get("/users/:correo/:password", async (req, res) => {
  const { correo, password } = req.params;

  console.log(correo)
  try {
    const usuario = await adminSchema.findOne({ correo });

    if (!usuario) {
      return res.json({ isOk: false, msj: "El usuario no existe" });
    }

    if (password === usuario.password) {
      return res.json({correo,password, isOk: true, msj: "La contraseña es válida" });
    } else {
      return res.json({ isOk: false, msj: "La contraseña es incorrecta" });
    }
  } catch (error) {
    console.error("Error al buscar el usuario:", error);
    res.json({ isOk: false, msj: "Error al buscar el usuario" });
  }
});

module.exports = router;






// Configurar endpoint POST para guardar los datos del formulario


// router.post('/Contacto', async (req, res) => {
//   console.log('hola')
//   try {
//     const { Nombre, Correo, Asunto, Mensaje } = req.body;
//     const nuevoDato = new Formulario({ Nombre, Correo, Asunto, Mensaje });
//     await nuevoDato.save();
//     return console.log(nuevoDato)
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });





