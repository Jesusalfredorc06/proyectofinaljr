const mongoose = require('mongoose');


// Crear un modelo para los datos
const FormularioSchema = new mongoose.Schema({
    nombre: {
      type: String,
      required: true
    },
    apellido: {
      type: String,
      required: true
    },
    correo: {
      type: String,
      required: true
    },
    telefono: {
      type: String,
      required: true
    },
    nacimiento: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    ciudad: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    fecha: {
      type: String,
      required: true
    },
    hora: {
      type: String,
      required: true
    },
    motivo: {
        type: String,
        required: true
    }
  });

module.exports = mongoose.model('formularios', FormularioSchema);