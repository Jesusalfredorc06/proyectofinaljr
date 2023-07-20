const express = require('express');
const FormularioSchema = require('../models/formulario')
const routerF = express.Router();


routerF.post('/contacto', async (req, res) => {
  try {
    const { asunto, correo, mensaje, nombre } = req.body;
    console.log(req.body)
    const nuevoDato = new FormularioSchema({  asunto, correo, mensaje, nombre });
    
    await nuevoDato.save();
    res.json(nuevoDato);
  } catch (error) {
    res.status(500).json({ error: error.message});
  }
});

routerF.get("/contacto", (req,res)=>{
  FormularioSchema
  .find()
  .then((data) => res.json(data))
  .catch((error) => res.json({message: error}))
});

// Ruta para eliminar un pedido específico
routerF.delete('/contacto/:id', (req, res) => {
  const {id} = req.params;
  FormularioSchema.deleteOne({_id:id})
      .then(() => {
          res.json({ message: 'Pedido eliminado exitosamente' });
      })
      .catch(error => {
          console.error('Error al eliminar el pedido de MongoDB:', error);
          res.status(500).send('Error al eliminar el pedido');
      });
});

module.exports = routerF;