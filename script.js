function descuento() {
    let resultado = prompt("Indicar el valor total");
    if (resultado > 20000) {
        resultado = resultado - (resultado * 0.25);
    }
    alert(resultado);
}

var cancion = "Musica Ligera";
var incluido = false;

function incluirCancion(nombreCancion) {
    if (incluido) {
        console.log("Canción ya incluida")
    } else {
        cancion = nombreCancion;
        console.log("¡Nueva canción incluida!");
        console.log(cancion)
    }
}

//incluirCancion("Campanas en la noche");

var auto = {
    modelo: "Clio",
    anio: 2016,
    kilometros: 50000,
    patente: "AJJ720",
    arrancar: function () {
        console.log("Arrancando...")
    }
}

/*auto.kilometros += 500;
console.log(auto.kilometros)
auto.arrancar();*/

function cambiarTitulo() {
    let titulo = document.getElementById("titulo-principal");
    titulo.innerHTML = prompt("Ingresa el nuevo titulo")
}

function enviarComentario() {
    //agarramos lo que el usuario puso en el input
    let comentario = document.getElementById("comentarioNuevo").value;
    //creamos un elemento nuevo de tipo parrafo
    let elementoNuevo = document.createElement("p");
    //al elemento nuevo le pusimos el texto del input
    elementoNuevo.innerHTML = comentario;
    //buscamos un elemento padre a donde agregaremos el elemento nuev
    //y agrego el elemento nuevo a ese elemento padre
    document.getElementById("zonaDeComentarios").appendChild(elementoNuevo)
}

function enviarFormulario() {
    let nomb = document.getElementById("nombre").value;
    if (nomb == "Jorge") {
        window.location.href = "enviado.html"
    }
}

function redireccionarPagPrincipal() {
    window.location.href = "index.html"
}

function usarCelular() {
    document.getElementById("email").setAttribute("type", "number");
}

function modoClaro(){
    document.body.style.color = "black";
    document.body.style.backgroundColor = "white";
}

function modoOscuro(){
    document.body.style.color = "white";
    document.body.style.backgroundColor = "grey";
}

function cambiarFondo(){
    let colorNuevo = document.getElementById("colorUsuario").value;
    document.body.style.backgroundColor = colorNuevo;
}


for(i=0;i<5;i++){
    console.log("Voy contando por el "+i)
}

var indiceSlides = 1;
mostrarSlides(indiceSlides);

if(document.getElementById("boton-siguiente").addEventListener("keydown",KeyboardEvent.altKey)){
    pasarSlides(-1);
    
}
function pasarSlides(n){
    
    mostrarSlides(indiceSlides+=n);
}

function mostrarSlides(n){
    var i;
    var x = document.getElementsByClassName("slide");
    if(n<1){
        indiceSlides = x.length;
    }
    if(n>x.length){
        indiceSlides= 1;
    }
    for(i=0; i<x.length;i++){
        x[i].style.display = "none";
    }
    x[indiceSlides-1].style.display = "block";
}








