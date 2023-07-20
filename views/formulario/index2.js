const btmham = document.querySelector('#btnh')
const classmenu = document.querySelector('.btnMenu')



btmham.addEventListener('click',(e)=>{
    console.log("hola")
e.preventDefault()

classmenu.classList.toggle('d-none')

})