let age = parseInt(prompt('Ingrese su edad'));

if (!isNaN(age)) {
  if (age >= 18) {
    alert ('Puedes conducir');
  } else {
    alert ('Todavia no tienes edad para conducir');
  }
} else {
  alert ('Solo puedes ingresar números')
}


