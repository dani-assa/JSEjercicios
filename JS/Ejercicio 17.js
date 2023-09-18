/*17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.*/

let vocales = ['a', 'e', 'i','o', 'u'];
let text = prompt('Ingrese un texto:');
let textMinusc = text.toLowerCase();
let posicion = 0;

for (let i = 0; i < textMinusc.length; i++) {
  for (let e = 0; e < vocales.length; e++) {
    if (vocales[e] === textMinusc.charAt(i)) {
      posicion = i;
    } 
  } 
}

document.write(`La primera vocal ${textMinusc.charAt(posicion)} esta en la posicion ${posicion}`);


