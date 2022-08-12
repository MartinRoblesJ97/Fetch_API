//EJEMPLO DE FORMULARIO

//Función para guardar datos
function guardarDatos(){
localStorage.nombre = document.getElementById('nombre').value; 
localStorage.password = document.getElementById('password').value; 

document.getElementById("datos").innerHTML=("Datos guardados correctamente");

console.log(typeof localStorage.nombre);
console.log(typeof localStorage.password);
}


//Función para recuperar datos
function recuperarDatos(){
     if(localStorage.nombre != undefined && localStorage.password != undefined){
        document.getElementById("datos").innerHTML = "Nombre: " + localStorage.nombre + "Password: " + localStorage.password;}
 
    else{
        document.getElementById("datos").innerHTML = "No has introducido tu nombre y password";}
}

