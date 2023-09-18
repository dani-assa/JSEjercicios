/*14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.*/

let text = prompt('Escriba una frase: ');

for (let i = 0; i < text.length; i++) {
  let caracter = text.charAt(i);
  if (i == caracter.length ) {
    document.write(caracter);
  } else {
    document.write(caracter + '-');
  }
  
}