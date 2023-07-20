function verPedidos() {


    fetch(`http://localhost:5000/api/contacto`)
    .then(response => response.json())
    .then(data => {
        crear(data)
        
      console.log(data); // Llamar a la función con los datos

    })


    // Hacer una solicitud al backend para obtener los datos de la base de datos
   function crear(data) {
            // Mostrar los pedidos en el contenedor
            console.log(data)
            const pedidoContainer = document.getElementById('pedidoContainer');
            data.forEach(pedido => {
                const pedidoDiv = document.createElement('tr');
                pedidoDiv.innerHTML = `
                    <td>Nombre: ${pedido.nombre}</td>
                    <td>Correo: ${pedido.correo}</td>
                    <td>Asunto: ${pedido.asunto}</td>
                    <td>Mensaje: ${pedido.mensaje}</td>
                    <hr>
                    <div class="p-2 grid justify-center">
                        <button onclick="eliminarPedido('${pedido._id}')" class="bg-red-500 hover:bg-red-600 font-bold py-2 px-4 rounded-full">Eliminar Mensaje</button>
                    </div>
                `;
                pedidoContainer.appendChild(pedidoDiv);
            });}
}

function eliminarPedido(pedidoid){
    // Hacer una solicitud al backend para eliminar el pedido
    console.log(pedidoid)
    fetch(`http://localhost:5000/api/contacto/${pedidoid}`, { method: 'DELETE' }) // Ruta en el backend que maneja la eliminación del pedido
        .then(response => response.json())
        .then(() => {
            console.log('Pedido eliminado exitosamente');
            // Volver a cargar los pedidos después de eliminar
            verPedidos();
        })
        .catch(error => {
            console.error('Error al eliminar el pedido:', error);
        });
}

        
       
