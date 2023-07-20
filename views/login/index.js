const btnIniciar = document.querySelector("#btn_inicio");

btnIniciar.addEventListener('click',()=>{

const user = document.querySelector('#usuario').value;
const password = document.querySelector('#password').value;

console.log(user,password)

confirmarUser(user,password)

})

async function confirmarUser(correo,password) {
    
    const url = `/api/users/${correo}/${password}`; 
    try {
      const response = await fetch(url);
      const data = await response.json();
      
      console.log(data);

        if(data.isOk){
            swal({
              icon:'success',
              title: 'Ingreso Existoso',

              
            });
            loguearseajuro(data)
            //console.log("hola")
            
            /* setTimeout(() => {
              window.location.href="/admin"
            }, 3000); */
        }else{
            swal({
              icon: 'error',
              title: 'Los datos ingresados son incorrectos',
            });
            //console.log("no puedes acceder")
        }

    } catch (error) {
      console.error('Error:', error);
    }
  }

  
function loguearseajuro(data){
  console.log(data)
  localStorage.setItem(
    'usuario', JSON.stringify(data)
  ); 
  
  setTimeout(() => {
    window.location.href="/admin"
  }, 3000);
    
  
}
  