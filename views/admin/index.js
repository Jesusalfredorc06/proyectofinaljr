const usuario = JSON.parse(localStorage.getItem('usuario'))
console.log(usuario)
console.log('hola')

if(!usuario){
    window.location.href='/login'
}

function cerrarsesion(){
    localStorage.removeItem('usuario')
    window.location.href='/login'
}