const inputUser = parseInt(prompt('Escribe un número del 1 al 30'));

if (!isNaN(inputUser) && inputUser <= 30) {
  for (let i = 1; i <= inputUser; i++) {
    for (let e = 1; e <= i; e++) {
      document.write(i);
    }
    document.write('<br>');
  }
}

