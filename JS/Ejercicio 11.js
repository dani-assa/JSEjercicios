/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. */


let primerNombre = prompt('Ingrese el primer nombre:');
let primeraEdad =parseInt(prompt('Ingrese la primera edad:'));

let segundoNombre = prompt('Ingrese el segundo nombre:');
let segundaEdad =parseInt(prompt('Ingrese la segunda edad:'));

let tercerNombre = prompt('Ingrese el tercera nombre:');
let terceraEdad =parseInt(prompt('Ingrese la tercera edad:'));

let maximo = Math.max(primeraEdad, segundaEdad, terceraEdad);

if (maximo == primeraEdad) {
  document.write(`El mayor es ${primerNombre}`);
} else if (maximo == segundaEdad) {
  document.write(`El mayor es ${segundoNombre}`);
} else if (maximo == terceraEdad) {
  document.write(`El mayor es ${tercerNombre}`);
  
}
