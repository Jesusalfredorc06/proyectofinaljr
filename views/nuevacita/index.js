const Formulario = document.querySelector('#form2');

//guardando la info del horario

let Horarios = {
    Horas: []
    
}

Formulario.addEventListener('submit', Generarhorarioyfecha);


Formulario.addEventListener('input', e =>{
    Horarios.Formulario = e.target.value;
    console.log(Horarios.Formulario)
})


var opcion1 = document.getElementsByName("opcion1")[0];
var opcion2 = document.getElementsByName("opcion2")[0];
var opcion3 = document.getElementsByName("opcion3")[0];
var opcion4 = document.getElementsByName("opcion4")[0];


Formulario.addEventListener('input',Horarios)


function adicionales(){
    Horarios.Horas=[]

    
    if (opcion1.checked) {
        Horarios.Horas.push(opcion1.value);
    }
    if (opcion2.checked) {
        Horarios.Horas.push(opcion2.value);
    }
    if (opcion3.checked) {
        Horarios.Horas.push(opcion3.value);
    }
    if (opcion4.checked) {
        Horarios.Horas.push(opcion4.value);
    }
  
}

function Generarhorarioyfecha(e) {
    e.preventDefault();
    // consultar los valores guardados en el objeto

    if (Horarios.Horas === '') {

        mostrarError('Debes Seleccionar El Horario')
        return;
    }

    console.log(Horarios)
}