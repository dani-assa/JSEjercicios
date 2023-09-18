/*15- Realiza un script que cuente el número de vocales que tiene un texto.*/

let text = prompt('Ingrese una frase:');
text = text.toUpperCase();
let caracter;
let vocales = 0; 

for (let i = 0; i < text.length; i++) {
  caracter = text.charAt(i);
  if (
    caracter == 'A' ||
    caracter == 'E' ||
    caracter == 'I' ||
    caracter == 'O' ||
    caracter == 'U'
    ) {
    vocales++
  }  
}
document.write(`El numero de vocales es: ${vocales}`);
