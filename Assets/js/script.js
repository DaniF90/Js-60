function preguntarNombre(){

    //declaro una variable que almacena el nombre que el usuario escribe en el prompt
    let nombre = prompt('Ingrese su nombre:');

    //en el método alert ponemos por parámetro la variable nombre
    alert(nombre);

    //por último mostramos por consola el valor de la variable nombre
    console.log(nombre);
}

function noHaceNada() {
    var hola = 'Bienvenido a Js'
    let numero = 10000;

    const PI = 3.1416;
    alert(PI)
    PI = 3.11
    alert(PI)
}

function tipoDatos() {
    let cadena = 'Texto';
    let numero = 23;
    let esMayor = false;
    let persona = {
        nombre: 'James',
        apellido: 'Goisling',
        edad: 33
    }

    console.log(persona);

}

function may() {
    //crear variable que aloje el texto del párrafo a extraer los datos
    
    let texto = document.getElementById("struno").innerHTML;
    console.log(texto.toUpperCase());
}

function contar() {
    let contar = document.getElementById("struno").innerHTML;
    console.log(contar.length);
}

function repetir() {
    let texto = document.getElementById("struno").innerHTML;
    console.log(texto.repeat(3))
}

function reemplazar() {
    let texto = document.getElementById("struno").innerHTML;
    console.log(texto.replace("blablabla","Lorem"))
}

function parint() {
    let texto = "15"
    console.log(parseInt(texto) + 15)
}

function parfloat() {
    let texto = "3.1416"
    console.log(parseFloat(texto) + 15)
}

function numb() {
    let nro = "10"
    console.log(Number(nro))
}

function oper() {
    let numero1 = 20;
    let numero2 = 8;

    let total = numero1 + numero2;
    console.log("La suma de los dos números es: " + total)

    total = numero1 - numero2;
    console.log("La resta de los dos números es: " + total)
   
    total = numero1 * numero2;
    console.log("La multiplicación de los dos números es: " + total)

    total = numero1 / numero2;
    console.log("La división de los dos números es: " + total)

    total = numero1 % numero2;
    console.log("El resto o módulo de la división de los dos números es: " + total)
}