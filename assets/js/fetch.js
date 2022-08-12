//Ejemplo de JavaScript sincrono
console.log("Inicio Sincrono");//1
function dosSincrono(){
    console.log("Dos");
}

function unoSincrono(){
    console.log("Uno");//2
    dosSincrono();//3
    console.log("Tres");//4
}

unoSincrono();
console.log("Fin de Sincrono");//5

//La razón para este orden es porque la operación se manda a llamar hasta el final

//EJEMPLO DE JS ASINCRONO
console.log("Inicio de asincrono");//1
function dos(){//Se pone en espera 2 segundos
    setTimeout(function(){
        console.log("Dos");//5
    }, 2000);
}

function uno(){
    setTimeout(function(){
        console.log("Uno");
    }, 0);//4
    dos();
    console.log("Tres");//2
}

uno();
console.log("Fin de Asincrono");//3

//PROMISES

//Ejemplo de promesa para saber el nombre
let nombre = "Martin";

const promesaNombre = new Promise((resolve, reject) =>{
    if (nombre !== "Martin") reject("Error!!, El nombre no es Martin");
    resolve(nombre);
});
console.log(promesaNombre);

//Promesa de Amor.
var promesaDeAmor = new Promise(function (resolve, reject){
    setTimeout(function(){
        resolve("Si quiero salir contigo");
    }, 5000);
});

promesaDeAmor.then(function(valor){
    console.log(valor);
});

console.log(promesaDeAmor);

//Ejemplo de promesa para ir por unas tortas
let decision = "No";

const promesaTortas = new Promise((resolve, reject) => {
    if (decision !== "Si") reject("No, no me gustas, no quiero ir contigo por tortas");
    resolve(decision);
});
console.log(promesaTortas);

//Fetch Pokemon

fetch ('https://pokeapi.co/api/v2/pokemon/charizard')//Petición
 .then(datos =>{//Función a ejecutar
    return datos.json();//Convertir a JSON el texto
 })
 .then(info =>{//cuando la promesa se cumple,se ejecuta esta función
    console.log("El nombre de nuestro Pokemon es: ", info.name, " y su número es: ", info.id);
 })

//Ejemplo Pokeapi
 function fetchPokemon(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(respuesta => respuesta.json())
    .then(dato => console.log(dato))
 }
 fetchPokemon(1);


//////////////////////////////////
 
//Solicitud GET con fakestoreapi  
fetch("https://fakestoreapi.com/products/10")
.then((datos) => {
    return datos.json()
})
    .then((info) => {
        console.log("El nombre del producto es:", info.title, "y su precio es: ", info.price);
    });

/////////////////////////////////////

 //Solicitud POST para enviar información
 fetch('https://fakestoreapi.com/products',{
    method: "POST",
    body:JSON.stringify(
        {
            title: 'Chettos naranjas',
            price: 3.0,
            description: 'Deliciosos chettos naranjas',
            image: 'https://i.pravatar.cc',
            category: 'jewelery'
        }
    )
 })
 .then(res=>res.json())
 .then(json=>console.log(json))
