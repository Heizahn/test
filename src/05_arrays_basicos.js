/**
 * EJERCICIO 05 — Arrays: operaciones básicas
 *
 * OBJETIVO: Recorrer arrays con bucles, comparar elementos y
 * aplicar reducciones simples.
 */

// maximo: Devuelve el número más grande del array. Asume arr no vacío y solo números.
// Recibe: arr (number[]). Retorna: number.
// Ejemplo: maximo([3, 1, 4, 1, 5, 9, 2, 6]) -> 9.
function maximo(arr) {
  // TODO: implement
}

// minimo: Devuelve el número más pequeño del array. Asume arr no vacío y solo números.
// Recibe: arr (number[]). Retorna: number.
// Ejemplo: minimo([3, 1, 4, 1, 5]) -> 1.
function minimo(arr) {
  // TODO: implement
}

// segundoMayor: Devuelve el segundo número más grande distinto del array.
// Si no existe (longitud < 2 o todos iguales), devuelve null.
// Recibe: arr (number[]). Retorna: number | null.
// Ejemplo: segundoMayor([3, 1, 4, 1, 5, 9, 2, 6]) -> 6.
function segundoMayor(arr) {
  // TODO: implement
}

// filtrarMayores: Devuelve un nuevo array solo con los números estrictamente mayores a n.
// Si ningún elemento cumple, devuelve [].
// Recibe: arr (number[]), n (number). Retorna: number[].
// Ejemplo: filtrarMayores([1, 5, 3, 8, 2], 3) -> [5, 8];
//          filtrarMayores([1, 2, 3], 10)    -> [];
//          filtrarMayores([1, 3, 5], 3)     -> [5].
function filtrarMayores(arr, n) {
  // TODO: implement
}

// sumar: Devuelve la suma de todos los números del array.
// Si el array está vacío, devuelve 0.
// Recibe: arr (number[]). Retorna: number.
// Ejemplo: sumar([1, 2, 3, 4]) -> 10.
function sumar(arr) {
  // TODO: implement
}

export { maximo, minimo, segundoMayor, filtrarMayores, sumar };