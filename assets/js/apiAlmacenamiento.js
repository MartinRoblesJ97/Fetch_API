
//APIS DE ALMACENAMIENTO WEB


//LocalStorage LocalStorage.setItem(key,value)
localStorage.setItem("Nombre", "Martin");
localStorage.setItem("Apellido", "Robles");
localStorage.setItem("Edad", 24);
localStorage.setItem("¿Es programador?", true);
localStorage.setItem("Ciudad", "Guadalajara");
localStorage.setItem("¿Dinero?", false);
localStorage.setItem("¿Hambre?", true);

//Recuperar datps (Local.Storage.getItem(key, value))
let recuperarNombre = localStorage.getItem("Nombre");
console.log("El nombre es: ", recuperarNombre);
let recuperarApellido = localStorage.getItem("Apellido");
console.log("El apellido es:", recuperarApellido);
let recuperarEdad = localStorage.getItem("Edad");
console.log("La edad es:" , recuperarEdad);

//Añadiendo más datos

{
localStorage.setItem("Nombre-2", "Felipe");
localStorage.setItem("Apellido-2", "Maqueda");
localStorage.setItem("Edad-2", 30);
localStorage.setItem("¿Es programador?-2", true);
}

{
localStorage.setItem("Nombre-3", "Gabriel");
localStorage.setItem("Apellido-3", "Campos");
localStorage.setItem("Edad-3", 28);
localStorage.setItem("¿Es programador?-3", true);
}

//Remover datos de LocalStorage
//Se eliminan variables que se definieron mal

localStorage.removeItem("¿Es programador2?2");
localStorage.removeItem("¿Es programador3?");
localStorage.removeItem("Apellido2");
localStorage.removeItem("Apellido3");
localStorage.removeItem("Edad2");
localStorage.removeItem("Edad3");
localStorage.removeItem("Nombre2");
localStorage.removeItem("Nombre3");

//Conocer el largo de nuestro almacenamiento
//gallina tiene huevos = gth => length
let longitudLocalStorage = localStorage.length;
console.log("Se tiene",longitudLocalStorage, "elementos almacenados");

//Limpiar datos
localStorage.clear();

//SESION STORAGE

//Agregar elementos con sessionStorage
sessionStorage.setItem("Perrito", "Mike");
sessionStorage.setItem("Nutria", "Hernesto");
sessionStorage.setItem("Conejo", "Griselo");
sessionStorage.setItem("Caracol", "Gary");
sessionStorage.setItem("Gatito", "Lucy");

