require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const PUERTO = process.env.PORT || 5000;


////////

const userRoutes = require("./routes/user");
const formularioRoutes = require("./routes/formulario");
const formulario2Routes = require("./routes/user2");
const pagosRoutes = require ("./routes/infopago");


//Llamado al puerto 
app.listen(PUERTO, () => {
    console.log(`el servidor wsta escuchando en el puerto ${PUERTO}...`);
})





// Middleware
app.use(express.json());
app.use(cors());


// Rutas
app.use('/api', userRoutes);
app.use('/api', formularioRoutes);
app.use('/api', formulario2Routes);
app.use('/api', pagosRoutes)



// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI_TEST)
  .then(() => console.log("Te has conectado a MongoDB"))
  .catch((error) => console.error(error));




//rutas front 
app.use('/',express.static(path.resolve('views','home')));
app.use('/contacto',express.static(path.resolve('views','contacto')));
app.use('/registro',express.static(path.resolve('views','registro')));
app.use('/login',express.static(path.resolve('views','login')));
app.use('/nuevacita',express.static(path.resolve('views','nuevacita')));
app.use('/admin',express.static(path.resolve('views','admin')));
app.use('/pago',express.static(path.resolve('views','pago')));
app.use('/formulario',express.static(path.resolve('views','formulario')));
app.use('/mensajes',express.static(path.resolve('views','mensajes')));
app.use('/pacientes',express.static(path.resolve('views','pacientes')));
app.use('/historial',express.static(path.resolve('views','historial')));
app.use('/pagos',express.static(path.resolve('views','pagos')));
app.use('/images',express.static(path.resolve('img')));

module.exports = app;