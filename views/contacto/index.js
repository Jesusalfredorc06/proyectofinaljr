(function () {
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarProducto);
  
    async function validarProducto(e) {
      e.preventDefault();
  
      const nombre = document.querySelector('#nombre').value;
      const correo = document.querySelector('#correo').value;
      const asunto = document.querySelector('#asunto').value;
      const mensaje = document.querySelector('#mensaje').value;
  
      const cliente = {
        asunto,
        correo,
        mensaje,
        nombre
      };
  
      try {
        const response = await fetch('http://localhost:5000/api/contacto', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(cliente)
        });
  
        if (response.ok) {
          swal({
            icon:'success',
            title: 'Mensaje Enviado',
          });
        } else {
          mostrarMensaje('Error al enviar el mensaje', 'error');
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
  