const express = require('express');
const PagoSchema = require('../models/infopago')
const routerF = express.Router();


routerF.post('/infopago', async (req, res) => {
  try {
    const { referencia, titular, banco, fecha, hora } = req.body;
    console.log(req.body)
    const nuevoDato = PagoSchema({  referencia, titular, banco, fecha, hora });
    
    await nuevoDato.save();
    res.json(nuevoDato);
  } catch (error) {
    res.status(500).json({ error: error.message});
  }
});

routerF.get('/infopago', (req, res) => {
  PagoSchema.find({})
      .then(pedidos => {
          res.json(pedidos);
      })
      .catch(error => {
          console.error('Error al obtener los pedidos de MongoDB:', error);
          res.status(500).send('Error al obtener los pedidos');
      });
});

// Ruta para eliminar un pedido específico
routerF.delete('/pago/:id', (req, res) => {
  const {id} = req.params;
  PagoSchema.deleteOne({_id:id})
      .then(() => {
          res.json({ message: 'Pago eliminado exitosamente' });
      })
      .catch(error => {
          console.error('Error al eliminar el pago de MongoDB:', error);
          res.status(500).send('Error al eliminar el pago');
      });
});

// Ruta para eliminar un pedido específico
routerF.delete('/pagos/:id', (req, res) => {
  const {id} = req.params;
  PagoSchema.deleteOne({_id:id})
      .then(() => {
          res.json({ message: 'Pago eliminado exitosamente' });
      })
      .catch(error => {
          console.error('Error al eliminar el pago de MongoDB:', error);
          res.status(500).send('Error al eliminar el pedido');
      });
});



module.exports = routerF;