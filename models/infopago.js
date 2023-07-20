const mongoose = require('mongoose');


// Crear un modelo para los datos
const PagoSchema = new mongoose.Schema({
    referencia: {
      type: String,
      required: true
    },
    titular: {
      type: String,
      required: true
    },
    banco: {
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
      }
  });

module.exports = mongoose.model('Pagos', PagoSchema);