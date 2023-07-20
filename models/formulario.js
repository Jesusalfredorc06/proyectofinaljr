const mongoose = require('mongoose');


// Crear un modelo para los datos
const FormularioSchema = new mongoose.Schema({
    asunto: {
      type: String,
      required: true
    },
    correo: {
      type: String,
      required: true
    },
    mensaje: {
      type: String,
      required: true
    },
    nombre: {
      type: String,
      required: true
    }
  });

module.exports = mongoose.model('ContactosNuevos', FormularioSchema);