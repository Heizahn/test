/**
 * EJERCICIO 10 — Recursión
 *
 * OBJETIVO: Pensar problemas en términos de casos base y caso recursivo.
 * Ninguna función debe usar bucles.
 */

// factorialRec: Devuelve el factorial de n calculado de forma recursiva.
// 0! = 1 por convención.
// Recibe: n (number, entero >= 0). Retorna: number.
// Ejemplo: factorialRec(5) -> 120;
//          factorialRec(0) -> 1;       // caso base
//          factorialRec(1) -> 1.       // caso base
function factorialRec(n) {
  // TODO: implement
}

// fibonacci: Devuelve el n-ésimo número de Fibonacci, 0-indexado.
// fib(0) = 0, fib(1) = 1, fib(n) = fib(n-1) + fib(n-2).
// Recibe: n (number, entero >= 0). Retorna: number.
// Ejemplo: fibonacci(0) -> 0;        // primer número de la secuencia
//          fibonacci(1) -> 1;        // segundo número
//          fibonacci(6) -> 8;        // (0, 1, 1, 2, 3, 5, 8)
function fibonacci(n) {
  // TODO: implement
}

// sumaDigitos: Devuelve la suma de los dígitos de n.
// Si n es negativo, trabaja con su valor absoluto (ignora el signo).
// Recibe: n (number, entero). Retorna: number.
// Ejemplo: sumaDigitos(123) -> 6;       // 1+2+3
//          sumaDigitos(-45) -> 9;       // |n| = 45 → 4+5 = 9
//          sumaDigitos(0)   -> 0;       // caso base
//          sumaDigitos(7)   -> 7.       // un solo dígito (caso base)
function sumaDigitos(n) {
  // TODO: implement
}

// potencia: Devuelve base elevada a exp, calculada recursivamente.
// Por convención, base^0 = 1 (incluso si base = 0, el resultado es 1).
// No usar Math.pow.
// Recibe: base (number), exp (number, entero >= 0). Retorna: number.
// Ejemplo: potencia(2, 5)    -> 32;
//          potencia(5, 0)    -> 1;       // cualquier base^0 = 1
//          potencia(0, 5)    -> 0;       // base cero, exp > 0
//          potencia(1, 100)  -> 1;       // base 1 a cualquier exp
//          potencia(-2, 3)   -> -8;      // base negativa, exp impar
//          potencia(-2, 4)   -> 16.      // base negativa, exp par (positivo)
function potencia(base, exp) {
  // TODO: implement
}

export { factorialRec, fibonacci, sumaDigitos, potencia };