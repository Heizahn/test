/**
 * EJERCICIO 06 — Arrays: manipulación
 *
 * OBJETIVO: Practicar mutación, copia y composición de arrays.
 * Todas las funciones devuelven un NUEVO array (no mutan el original).
 */

// eliminarDuplicados: Devuelve un nuevo array sin elementos repetidos,
// conservando la PRIMERA aparición de cada elemento y el orden original.
// Recibe: arr (array). Retorna: array.
// Ejemplo: eliminarDuplicados([1, 2, 2, 3, 1])   -> [1, 2, 3];
//          eliminarDuplicados([])                -> [];
//          eliminarDuplicados(["a", "b", "a"])   -> ["a", "b"].
function eliminarDuplicados(arr) {
  // TODO: implement
}

// aplanar: Aplana el array UN solo nivel de profundidad (no recursivo).
// Los sub-arrays dentro de los sub-arrays NO se aplanan.
// Recibe: arr (any[]). Retorna: any[].
// Ejemplo: aplanar([1, [2, 3], [4], 5])     -> [1, 2, 3, 4, 5];
//          aplanar([1, [2, [3, 4]], 5])     -> [1, 2, [3, 4], 5];   // [3,4] queda como está
//          aplanar([])                      -> [].
function aplanar(arr) {
  // TODO: implement
}

// interseccion: Devuelve los elementos presentes en ambos arrays,
// sin duplicados y en el orden en que aparecen en el primero.
// Si no hay elementos en común, devuelve [].
// Recibe: arr1 (array), arr2 (array). Retorna: array.
// Ejemplo: interseccion([1, 2, 3], [2, 3, 4])     -> [2, 3];
//          interseccion([1, 2, 3], [4, 5, 6])     -> [];
//          interseccion([1, 2, 2, 3], [2, 3, 3])  -> [2, 3].      // sin duplicados
function interseccion(arr1, arr2) {
  // TODO: implement
}

// union: Devuelve la unión de los dos arrays sin duplicados,
// en el orden en que aparecen por primera vez entre los dos.
// Recibe: arr1 (array), arr2 (array). Retorna: array.
// Ejemplo: union([1, 2, 3], [3, 4, 5])    -> [1, 2, 3, 4, 5];
//          union([], [1, 2])               -> [1, 2];
//          union([1, 2, 3], [2, 3, 2])     -> [1, 2, 3];            // sin duplicados
function union(arr1, arr2) {
  // TODO: implement
}

// chunk: Divide el array en sub-arrays de tamaño `size`.
// Si size es mayor o igual al largo del array, devuelve UN solo chunk con todos los elementos.
// Si el array no se divide exactamente, el último chunk lleva el resto.
// Recibe: arr (array), size (number, >= 1). Retorna: array de arrays.
// Ejemplo: chunk([1, 2, 3, 4, 5], 2) -> [[1, 2], [3, 4], [5]];
//          chunk([1, 2, 3], 5)      -> [[1, 2, 3]];               // size > length
//          chunk([1, 2, 3, 4], 1)   -> [[1], [2], [3], [4]];
//          chunk([], 3)             -> [].
function chunk(arr, size) {
  // TODO: implement
}

export { eliminarDuplicados, aplanar, interseccion, union, chunk };