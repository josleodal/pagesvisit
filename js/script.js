

numero=localStorage.getItem('visitas');
let contadorVisitas = document.getElementById('contadorVisitas');
let btnReestablecer = document.getElementById('btnReestablecer');

window.addEventListener('load', () => {
    if (!numero) {
        numero=0
        console.log('El numero de visitas es ' +localStorage.getItem('visitas'))
    } else {
        numero++;
        localStorage.setItem('visitas', numero);

        contadorVisitas.innerText="";
        contadorVisitas.innerHTML=`<span>${numero}</span>`
        
    }
});

btnReestablecer.addEventListener('click', borrar=()=>{

numero=0
localStorage.setItem('visitas', numero)

contadorVisitas.innerHTML=`<span>${numero}</span>`


})
