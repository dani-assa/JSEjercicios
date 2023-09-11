// let age = parseInt(prompt('Ingrese su edad'));

// if (!isNaN(age)) {
//   if (age >= 18) {
//     alert ('Puedes conducir');
//   } else {
//     alert ('Todavia no tienes edad para conducir');
//   }
// } else {
//   alert ('Solo puedes ingresar números')
// }



// ---Ejercicio 7
const inputUser = parseInt(prompt('Ingrese un número del 1 al 50'));

if (!isNaN(inputUser) && inputUser <= 50) {
    for (let i = 1; i <= inputUser; i--) {
      for (let e = 1; e <= i; e++) {
        document.write(i);
      }
      document.write('<br>');
    }
  } 
