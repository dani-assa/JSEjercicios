const inputUser = parseInt(prompt('Escribe un número del 1 al 50'));

if (!isNaN(inputUser) && inputUser <= 50) {
  for (let i = 1; i <= inputUser; i++) {
    for (let e = 1; e <= i; e++) {
      document.write(e);
    }
    document.write('<br>');
  }
}