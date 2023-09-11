let cadenas = [];

while (true) {
  let entrada = prompt("Ingrese una cadena de texto (o presione 'cancelar' para salir):");

  if (entrada === null) {
    break; // Salir del bucle si se presiona 'cancelar'
  }

  cadenas.push(entrada);
}

if (cadenas.length > 0) {
  let resultado = cadenas.join('-');
  console.log("Cadenas concatenadas: " + resultado);
} else {
  console.log("No se ingresaron cadenas.");
}