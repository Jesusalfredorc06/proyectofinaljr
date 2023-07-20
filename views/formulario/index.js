(function () {
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarProducto);
  
    async function validarProducto(e) {
      e.preventDefault();
  
      const nombre = document.querySelector('#nombre').value;
      const apellido = document.querySelector('#apellido').value;
      const correo = document.querySelector('#correo').value;
      const telefono = document.querySelector('#telefono').value;
      const nacimiento = document.querySelector('#nacimiento').value;
      const direccion = document.querySelector('#direccion').value;
      const ciudad = document.querySelector('#ciudad').value;
      const estado = document.querySelector('#estado').value;
      const fecha = document.querySelector('#fecha').value;
      const hora = document.querySelector('#hora').value;
      const motivo = document.querySelector('#mensaje').value;
  
      const cliente = {
        nombre,
        apellido,
        correo,
        telefono,
        nacimiento,
        direccion,
        ciudad,
        estado,
        fecha,
        hora,
        motivo
      };
      
      try {
        const response = await fetch('/api/user2', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(cliente)
        });
  
        if (response.ok) {
          swal({
            icon:'success',
            title: 'Tu cita ha sido agendada',
          });
          setTimeout(() => {
            window.location.href="/pago"
          }, 3000);

        } else {
          mostrarMensaje('Error al enviar la cita', 'error');
        }
      } catch (error) {
        mostrarMensaje('Error en la conexión', 'error');
        console.log(error);
      }
    }
  
    function mostrarMensaje(mensaje, tipo) {
      
      console.log(`[${tipo}] ${mensaje}`);
    }
  })();

  