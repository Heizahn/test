/**
 * EJERCICIO 02 — Condicionales
 *
 * OBJETIVO: Practicar el uso de if/else, operadores de comparación
 * y expresiones lógicas.
 */

// mayorDeTres: Devuelve el mayor de tres números.
// Recibe: a, b, c (number). Retorna: number.
// Ejemplo: mayorDeTres(3, 7, 5) -> 7.
function mayorDeTres(a, b, c) {
  // TODO: implement
}

// esPositivo: Devuelve "positivo", "negativo" o "cero" según el número.
// Recibe: num (number). Retorna: string.
// Ejemplo: esPositivo(5) -> "positivo";  esPositivo(-1) -> "negativo".
function esPositivo(num) {
  // TODO: implement
}

// esBisiesto: Devuelve true si el año es bisiesto.
// Reglas: divisible por 4, pero no por 100, salvo que sea divisible por 400.
// Recibe: year (number, entero). Retorna: boolean.
// Ejemplo: esBisiesto(2024) -> true;  esBisiesto(1900) -> false.
function esBisiesto(year) {
  // TODO: implement
}

// clasificarNota: Clasifica una nota (0-10) en tres categorías.
//   0-5  -> "Reprobado"
//   6-8  -> "Aprobado"
//   9-10 -> "Excelente"
// Recibe: nota (number, 0-10). Retorna: string.
// Ejemplo: clasificarNota(7) -> "Aprobado".
function clasificarNota(nota) {
  // TODO: implement
}

// esVocal: Devuelve true si el carácter es una vocal (a, e, i, o, u),
// considerando mayúsculas y minúsculas.
// Recibe: letra (string de 1 carácter). Retorna: boolean.
// Ejemplo: esVocal("a") -> true;  esVocal("B") -> false.
function esVocal(letra) {
  // TODO: implement
}

export { mayorDeTres, esPositivo, esBisiesto, clasificarNota, esVocal };
