//funcion mayor edad del index//

function mostrarMensaje() {
    var edad = window.confirm('¿Eres mayor de 18 años?');
        if (edad === true) {
            window.alert('¡BIENVENIDO A NEW BUS!');
        } else { 
            window.alert('Estas ingresando bajo tu propia responsabilidad');
        }
    
    }



//funcion venta emergente de la pagina horarios//

const sanPedro = document.getElementById ('btn_sanpedro');
const rosario = document.getElementById ('btn_rosario');
const buenosAires = document.getElementById ('btn_bsas');
const container_sanpedro = document.getElementById ('container_sanpedro');
const container_rosario = document.getElementById ('container_rosario');
const container_bsas = document.getElementById ('container_bsas');
const cerrar = document.getElementById ('btn_cerrar');
const cerrar1 = document.getElementById ('btn_cerrar1');
const cerrar2 = document.getElementById ('btn_cerrar2');


sanPedro.addEventListener('click',()=>{
    container_sanpedro.classList.add('mostrar');
});
cerrar.addEventListener('click',()=>{
    container_sanpedro.classList.remove('mostrar');
});


rosario.addEventListener('click',()=>{
    container_rosario.classList.add('mostrar1');
});
cerrar1.addEventListener('click',()=>{
    container_rosario.classList.remove('mostrar1');
});


buenosAires.addEventListener('click',()=>{
    container_bsas.classList.add('mostrar2');
});
cerrar2.addEventListener('click',()=>{
    container_bsas.classList.remove('mostrar2');
});