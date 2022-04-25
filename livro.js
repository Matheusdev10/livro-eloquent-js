// ___________________________________-LIVRO ELOQUENT---------------------------------------
// quando quero que uma string vai para outra linha uso a barra invertida + n

// var nome = 'maria aparecida\ne ela sera a proxima'
// console.log(nome)

// var numero = (1 + 1 == 2 && 10 * 10 > 50) || (1 + 1 == 3 && 10 * 10 > 3)
// console.log(numero)

// var theNumber = Number(('Pick a number', 'lucia'))
// if (!isNaN(theNumber))
//   if (num < 10)
// console.log('Your number is the square root of ' + theNumber * theNumber)
// else console.log("Hey. Why didn't you give me a number?")

// var num = 50

// if (num < 10) {
//   console.log('Small')
// } else if (num < 100) console.log('Medium')
// else console.log('Large')

// var number = 0
// while (number <= 12) {
//   console.log(number)
//   number = number + 2
// }

// var numero = 0
// while (numero <= 12) {
//   // console.log(numero)
//   numero = numero + 2
// }

// var result = 1
// var counter = 0
// while (counter < 10) {
//   result = result * 2
//   counter = counter + 1
// }
// console.log(result)

// var result = 1
// var counter = 0
// while (counter < 41) {
//   result = result * 2
//   counter = counter + 1
// }

// do {
//   var name = console.log('Matheus')
// } while (!name)
// // console.log(name)

// var result = 1
// for (var counter = 0; counter < 10; counter = counter + 1) {
//   result = result * 2
// }
// console.log(result)

//------------------------exercicio do eloquent fizz and buzz------------------------------------
// for (var counter = 1; counter <= 100; counter++) {
//   const element = counter
//   console.log(element)
//   if (counter % 3 == 0) {
//     console.log('Fizz')
//   } else {
//     console.log('não é divisivel por 3')
//   }
//   if (counter % 5 == 0) {
//     console.log('Buzz')
//   } else {
//     console.log('Não é divisivel por 5')
//   }
//   if (counter % 3 == 0 && counter % 5 == 0) {
//     console.log('FizzBuzz')
//   } else {
//     console.log('Não é divisível por ambos')
//   }
// }

// var contador = 1
// while (contador <= 100) {
//   console.log(contador)
//   contador = contador += 1
//   if (contador % 3 == 0) {
//     console.log('Fizz')
//   } else {
//     console.log('não é divisível por 3')
//   }
//   if (contador % 5 == 0) {
//     console.log('Buzz')
//   } else {
//     console.log('Não divisível por 5')
//   }
//   if (contador % 3 == 0 && contador % 5) {
//     console.log('FizzBuzz')
//   } else {
//     console.log('Não divisível por ambos')
//   }
// }

// ----------------------------EXERCICIO TRIANGULO COM LOOP-----------------------
// var counter = ''
// while (counter < '#######') {
//   counter = counter += '#'
//   console.log(counter)
// }

// -------------------------------TABULEIRO DE XADREZ--------------------------------
// var counter = ' ####\n ####\n ####\n ####\n ####\n ####\n ####\n ####\n'
// console.log(counter)
// while (counter % 2 == 0) {
//   console.log('deu certo')
// }

// var counter = ''
// if (counter <= '####') {
//   counter = counter * counter
//   console.log(counter)
// }

// -------------------------------- FUNÇÕES LIVRO ELOQUENT------------------------------

var power = function (base, exponent) {
  var result = 1
  for (var count = 0; count < exponent; count++) result *= base
  return result
}
console.log(power(2, 10))

// A primeira função f1 declara a variável como local e então muda apenas seu valor.

var x = 'outside'
var f1 = function () {
  var x = 'inside f1'
}
f1()
console.log(x)
// → outside

var f2 = function () {
  x = 'inside f2'
}
f2()
console.log(x)
// → inside f2
// Já a segunda função f2 não declara x localmente, portanto sua referência a x está associada à variável global x
