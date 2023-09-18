const inputUser = parseInt(prompt('Escribe un número del 1 al 50'));

if (!isNaN(inputUser)) {
  if (inputUser >= 1 && inputUser <= 50) { 
    for (let i = inputUser; i >= 1; i--) {
      for (let e = i; e >= 1; e--) {
        document.write(i);
      }
      document.write('<br>');
    }
  } else {
    alert('El numero no es valido.')
  }
} else {
  alert('Valor erroneo.')
}

