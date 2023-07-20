const express = require('express');
const HistorialSchema = require('../models/user2')
const routerF = express.Router();


routerF.post('/user2', async (req, res) => {
  try {
    const { nombre, apellido, correo, telefono, nacimiento, direccion, ciudad, estado, fecha, hora, motivo } = req.body;
    console.log(req.body)
    const nuevoDato = HistorialSchema({  nombre, apellido, correo, telefono, nacimiento, direccion, ciudad, estado, fecha, hora, motivo });
    
    await nuevoDato.save();
    res.json(nuevoDato);
  } catch (error) {
    res.status(500).json({ error: error.message});
  }
});

routerF.get('/user2', (req, res) => {
  HistorialSchema.find({})
      .then(pedidos => {
          res.json(pedidos);
      })
      .catch(error => {
          console.error('Error al obtener los pedidos de MongoDB:', error);
          res.status(500).send('Error al obtener los pedidos');
      });
});

// Ruta para eliminar un pedido específico
routerF.delete('/historial/:id', (req, res) => {
  const {id} = req.params;
  HistorialSchema.deleteOne({_id:id})
      .then(() => {
          res.json({ message: 'Pedido eliminado exitosamente' });
      })
      .catch(error => {
          console.error('Error al eliminar el pedido de MongoDB:', error);
          res.status(500).send('Error al eliminar el pedido');
      });
});




module.exports = routerF;