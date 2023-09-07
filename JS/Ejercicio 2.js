const notas = parseInt(prompt('Ingrese una nota'));

if (!isNaN(notas)) {
  if (notas <= 2) {
    alert('Muy deficiente');
  } else if (notas >2 && notas <= 4) {
    alert('Insuficiente');
  } else if (notas > 4 && notas <= 6) {
    alert('Suficiente');
  } else if (notas === 7) {
    alert('Bien');
  } else if (notas > 7 && notas <=9) {
    alert('Notable');
  } else if (notas === 10) {
    alert('Sobresaliente');
  } else if (notas > 10) {
    alert('Número erróneo');
  }
} else {
  alert('Introduce un número válido')
}