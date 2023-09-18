let row = parseInt(prompt('Ingrese el numero de filas: '));
let columns = parseInt(prompt('Ingrese el numero de columnas: '));
let total = row * columns;

document.write('<table border>');

for (let indiceFila = 0; indiceFila < row; indiceFila++) {
  document.write('<tr>');
  for (let indiceColumnas = 0; indiceColumnas < columns; indiceColumnas++) {
    document.write('<td>' + total + '</td>');
    total--;
  }
  document.write('</tr>')
}
document.write('</table>');


document.write('<tr>' + '</tr>');


