//punto 1
{
//punto 1.2
let a = 3;
let b = 4;
let c = a+b;

console.log("La suma de", a ,"+", b ,"es", c);

//punto 1.3
let nombrePromt = prompt("Cual es tu nombre?");
console.log("Saludos, ",nombrePromt);
}

//punto 2
{
//punto 2.1
let a = 3;
let b = 7;
console.log(a);
if(a>b){
    console.log("el mayor es", a);
} else 
console.log("el mayor es", b);

//punto 2.2
let numeroIngresado = prompt("ingresa un numero")
if(numeroIngresado%2==0){
    console.log(numeroIngresado, "es par")
} else
console.log(numeroIngresado, "es impar")
}


//punto 3
{
//punto 3.1
for(let a = 10; a>=0; a--) {
    console.log(a);
}

//punto 3.2
let ingreso;
do{
ingreso = prompt("ingrese un numero mas grande que 100");
} while(ingreso<=100)
console.log("ingresaste un numero mas grande que 100");
}

//punto 4

{
//punto 4.1
let esPar=(num) =>{

    if(num%2==0){
        console.log("el numero ",num, "es par", true)
    } else
    console.log("el numero ",num, "es impar", false)
    }
esPar(6);
esPar(17);

//punto 4.2
let convertirCelsiusAFahrenheit=(medida) =>{
    let far = medida * 1.8 + 32;
    console.log(medida, "C° son equivalentes a ",far,"°F")
}
convertirCelsiusAFahrenheit(32);
convertirCelsiusAFahrenheit(17);
convertirCelsiusAFahrenheit(39);
}

//punto 5
{
//punto 5.1
let persona = {
    nombre: "Ema",
    apellido: "Ibarra",
    edad: 21,
    ciudad: "Guaymallen"
}
console.log(persona);

let actualizarCiudad=(nueva) =>{
    persona.ciudad = nueva;
    console.log("Datos actualizados ",persona);
}
actualizarCiudad("Capital");

//punto 5.2
let libro = {
    autor: "George Owell",
    titulo: "1984",
    año: 1949
}

let verificarAntiguedad=(edad) => {
    if((2024-edad)<=10){
        console.log("el libro ", libro.nombre, "es antiguo", false) 
    } else console.log("el libro ", libro.nombre, "es antiguo", true) 
}
verificarAntiguedad(libro.edad);
}

//punto 6 arrays
{
//punto 6.1
let numeros = [1,2,3,4,5,6,7,8,9,10];
let numMultiplicados = numeros.map(elemento => elemento*2);
console.log("Numeros originales ",numeros);
console.log("Numeros multiplicados por 2 ",numMultiplicados);

//punto 6.2
let pares = [];

for(let i = 0; i<=20;i++){
    if(i%2 === 0){
        pares.push(i);
    }
}
console.log("Primeros numeros pares ",pares);

}

//punto 7
{
//punto 7.1
let boton = document.getElementById("boton1");
let par = document.getElementById("parrafo");


let cambiarColor=() =>{
    if(par.classList.contains("par")){
    par.classList.remove("par");
    } else par.classList.add("par");
}

boton.addEventListener("click", () => {
    cambiarColor();
});

//punto 7.2
let botonAlerta = document.getElementById("boton2");

let getDataInput = () => {
let input1 = document.getElementById("input");
alert(input1.value);
}

botonAlerta.addEventListener('click',()=>{
getDataInput();    
})

}

//punto 8
{
//punto 8.1
let listaElemento1 = document.getElementById("el1");
let listaElemento2 = document.getElementById("el2");
let listaElemento3 = document.getElementById("el3");
let listaElemento4 = document.getElementById("el4");


listaElemento1.addEventListener('click',()=>{
    console.log(listaElemento1.innerText);
})
listaElemento2.addEventListener('click',()=>{
    console.log(listaElemento2.innerText);
})
listaElemento3.addEventListener('click',()=>{
    console.log(listaElemento3.innerText);
})
listaElemento4.addEventListener('click',()=>{
    console.log(listaElemento4.innerText);
})

//punto 8.2
let input2 = document.getElementById("texto8");
let botonHab = document.getElementById("boton3");
let botonDes = document.getElementById("boton4");

botonHab.addEventListener('click', () =>{
input2.disabled = false;
})

botonDes.addEventListener('click', () =>{
input2.disabled = true;
})

}

//punto 9
{
//punto 9.1

let botonGuardar = document.getElementById("guardar");
let botonBorrar = document.getElementById("borrar");
let correo = document.getElementById("mail");
let labelCorreo = document.getElementById("labelCorreo");


botonGuardar.addEventListener ('click', () => {
    localStorage.setItem("mail", correo.value);
    labelCorreo.innerHTML += localStorage.getItem("mail");

})
botonBorrar.addEventListener ('click', () => {
    localStorage.setItem("mail", "");
    labelCorreo.innerHTML = "Correo guardado: ";
})
labelCorreo.innerHTML += localStorage.getItem("mail");


}


