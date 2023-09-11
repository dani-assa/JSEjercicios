const inputUser = parseInt(prompt('Ingrese un número del 1 al 500'));


const multiplo4y9 = (nro) => {
  nro % 4 === 0 && nro % 9 === 0;
}

for (let i = 0; i <= 500; i++) {
  const multiplo = multiplo4y9(i);
  console.log(`Número ${i}${multiplo ? ' (Múltiplo de 4 y 9)' : ''}`);
}