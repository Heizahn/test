/**
 * EJERCICIO 09 — Búsqueda y ordenamiento
 *
 * OBJETIVO: Implementar algoritmos clásicos sin usar los helpers de
 * Array.prototype (indexOf, sort, includes, etc.).
 */

// busquedaLineal: Devuelve el índice del PRIMER elemento estrictamente igual a target,
// o -1 si no se encuentra.
// Recibe: arr (any[]), target (any). Retorna: number.
// Ejemplo: busquedaLineal([4, 2, 7, 1], 7)        -> 2;
//          busquedaLineal([4, 2, 7, 1], 99)       -> -1;       // no encontrado
//          busquedaLineal([1, 2, 3, 2, 1], 2)    -> 1;        // primera aparición
//          busquedaLineal([], 5)                  -> -1;       // array vacío
//          busquedaLineal([1, 2, 3], 1)           -> 0;        // primer elemento.
function busquedaLineal(arr, target) {
  // TODO: implement
}

// busquedaBinaria: Devuelve el índice de target en un array ORDENADO ascendentemente,
// o -1 si no está. Asume que el array viene ya ordenado (no se valida).
// Implementación esperada con el algoritmo divide y vencerás (O(log n)).
// Recibe: arr (number[], ORDENADO asc), target (number). Retorna: number.
// Ejemplo: busquedaBinaria([1, 3, 5, 7, 9, 11], 7)   -> 3;       // en el medio
//          busquedaBinaria([1, 3, 5, 7, 9, 11], 1)   -> 0;       // primer elemento
//          busquedaBinaria([1, 3, 5, 7, 9, 11], 11)  -> 5;       // último elemento
//          busquedaBinaria([1, 3, 5, 7, 9, 11], 4)   -> -1;      // no encontrado
//          busquedaBinaria([], 5)                     -> -1;      // array vacío
//          busquedaBinaria([5], 5)                    -> 0;       // un elem, match
//          busquedaBinaria([5], 3)                    -> -1.      // un elem, no match
function busquedaBinaria(arr, target) {
  // TODO: implement
}

// bubbleSort: Devuelve un NUEVO array con los números ordenados ascendentemente,
// sin mutar el array original.
// Si el array ya está ordenado, devuelve una copia con el mismo contenido.
// Recibe: arr (number[]). Retorna: number[].
// Ejemplo: bubbleSort([5, 2, 8, 1, 4])    -> [1, 2, 4, 5, 8];
//          bubbleSort([])                  -> [];
//          bubbleSort([42])                -> [42];
//          bubbleSort([1, 2, 3, 4, 5])     -> [1, 2, 3, 4, 5];   // ya ordenado
//          bubbleSort([5, 4, 3, 2, 1])     -> [1, 2, 3, 4, 5];   // inverso
//          bubbleSort([-3, -1, -2])        -> [-3, -2, -1];      // negativos
//          bubbleSort([3, 1, 3, 1, 3])     -> [1, 1, 3, 3, 3].   // duplicados, estable
function bubbleSort(arr) {
  // TODO: implement
}

// ordenarPor: Devuelve un NUEVO array de objetos ordenados ascendentemente
// por el valor de la propiedad `prop`. El ordenamiento es estable: objetos
// con el mismo valor de `prop` mantienen su orden original entre sí.
// Recibe: arr (object[]), prop (string). Retorna: object[].
// Ejemplo: ordenarPor([{edad:30}, {edad:22}, {edad:25}], "edad")
//          -> [{edad:22}, {edad:25}, {edad:30}];
//          ordenarPor(
//            [{nombre:"Ana"}, {nombre:"Carlos"}, {nombre:"Bea"}], "nombre",
//          )
//          -> [{nombre:"Ana"}, {nombre:"Bea"}, {nombre:"Carlos"}];   // strings alfabético
//          ordenarPor([], "edad")                                     -> [];
//          ordenarPor([{nombre:"Ana"}], "edad")                       -> [{nombre:"Ana"}].
function ordenarPor(arr, prop) {
  // TODO: implement
}

export { busquedaLineal, busquedaBinaria, bubbleSort, ordenarPor };