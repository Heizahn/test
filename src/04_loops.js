/**
 * EJERCICIO 04 — Bucles
 *
 * OBJETIVO: Practicar for, while y la acumulación de resultados en bucles.
 */

// sumaPares: Devuelve la suma de todos los números pares desde 1 hasta n inclusive.
// Si n < 1, devuelve 0.
// Recibe: n (number, entero positivo). Retorna: number.
// Ejemplo: sumaPares(10) -> 30  (2+4+6+8+10);
//          sumaPares(1) -> 0.
function sumaPares(n) {
  // TODO: implement

}

// factorial: Devuelve el factorial de n (n! = n * (n-1) * ... * 1).
// Por convención, 0! = 1.
// Recibe: n (number, entero >= 0). Retorna: number.
// Ejemplo: factorial(5) -> 120;
//          factorial(0) -> 1.
function factorial(n) {
  // TODO: implement

}

// fizzbuzz: Devuelve un array con los números del 1 al n, sustituyendo:
//   múltiplos de 3      -> "Fizz"
//   múltiplos de 5      -> "Buzz"
//   múltiplos de ambos  -> "FizzBuzz"
//   el resto            -> el número como number (NO como string)
// Recibe: n (number, entero positivo). Retorna: array de (string | number).
// Ejemplo: fizzbuzz(5)  -> [1, 2, "Fizz", 4, "Buzz"];
//          fizzbuzz(15) -> [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz",
//                           11, "Fizz", 13, 14, "FizzBuzz"].
function fizzbuzz(n) {
  // TODO: implement

}

// tablaMultiplicar: Devuelve un array con la tabla de multiplicar de `num`,
// desde 0 hasta `hasta` inclusive.
// Si hasta = 0, devuelve [0].
// Recibe: num (number), hasta (number, entero >= 0). Retorna: array de number.
// Ejemplo: tablaMultiplicar(3, 5) -> [0, 3, 6, 9, 12, 15];
//          tablaMultiplicar(5, 0) -> [0].
function tablaMultiplicar(num, hasta) {
  // TODO: implement

}

export { sumaPares, factorial, fizzbuzz, tablaMultiplicar };