const ejercicio5 = () => {
  const dni = parseInt(document.getElementById('dni').value);
  const letras =['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
  const resto = dni % 23;
  do {
    document.write(letras[i]);
  } while (!isNaN(dni) && dni > 0 && dni <= 99999999);
}