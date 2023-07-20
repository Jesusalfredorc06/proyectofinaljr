
    const formulario = document.querySelector('#formpago');
    formulario.addEventListener('click', (e) =>{
      e.preventDefault()
      validarProducto()
    });
  
    async function validarProducto() {
  
      const referencia = document.querySelector('#referencia').value;
      const titular = document.querySelector('#titular').value;
      const banco = document.querySelector('#banco').value;
      const fecha = document.querySelector('#fecha').value;
      const hora = document.querySelector('#hora').value;
  
      const cliente = {
        referencia,
        titular,
        banco,
        fecha,
        hora
      };
      console.log(cliente)
  
      try {
        const response = await fetch('http://localhost:5000/api/infopago', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(cliente)
        });
  
        if (response.ok) {
          swal({
            icon:'success',
            title: 'Pago Registrado',
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
;