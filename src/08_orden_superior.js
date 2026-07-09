/**
 * EJERCICIO 08 — Funciones de orden superior
 *
 * OBJETIVO: Implementar a mano las versiones de map, filter y reduce,
 * y una utilidad de agrupación. Sin usar los métodos Array.prototype.
 */

// miMap: Devuelve un nuevo array con el resultado de aplicar fn a cada elemento.
// fn recibe (item, index) por cada elemento.
// Si el array está vacío, devuelve [].
// Recibe: arr (any[]), fn ((item: any, index: number) => any). Retorna: any[].
// Ejemplo: miMap([1, 2, 3], x => x * 2)      -> [2, 4, 6];
//          miMap([1, 2, 3], (x, i) => x + i) -> [1, 3, 5];   // usando el índice
//          miMap([], x => x * 2)              -> [].
function miMap(arr, fn) {
  // TODO: implement (no usar Array.prototype.map)
}

// miFilter: Devuelve un nuevo array solo con los elementos que pasan la prueba de fn.
// fn recibe (item, index) por cada elemento y debe devolver boolean.
// Si el array está vacío, devuelve [].
// Recibe: arr (any[]), fn ((item: any, index: number) => boolean). Retorna: any[].
// Ejemplo: miFilter([1, 2, 3, 4], x => x % 2 === 0) -> [2, 4];
//          miFilter([1, 2, 3, 4], (x, i) => i % 2 === 0) -> [1, 3];  // por índice
//          miFilter([], x => true)                    -> [].
function miFilter(arr, fn) {
  // TODO: implement (no usar Array.prototype.filter)
}

// miReduce: Reduce el array a un único valor acumulando con fn.
// - Si se pasa `init`, se usa como acumulador inicial y se aplica fn desde el primer elemento.
// - Si NO se pasa `init`, se usa el primer elemento del array como acumulador inicial
//   y se aplica fn desde el segundo elemento.
// - Si el array está vacío y NO se pasa init, devuelve undefined.
// fn recibe (acc, curr, index) en cada paso.
// Recibe: arr (any[]), fn ((acc: any, curr: any, index: number) => any), init (any, opcional). Retorna: any.
// Ejemplo: miReduce([1, 2, 3, 4], (acc, x) => acc + x, 0) -> 10;   // con init
//          miReduce([1, 2, 3, 4], (acc, x) => acc + x)     -> 10;   // sin init (arr[0] = 1 es el acc inicial)
//          miReduce([], (acc, x) => acc + x, 100)          -> 100;  // array vacío, devuelve init
//          miReduce([], (acc, x) => acc + x)               -> undefined.
function miReduce(arr, fn, init) {
  // TODO: implement (no usar Array.prototype.reduce)
}

// agruparPor: Devuelve un objeto donde cada clave es el valor de obj[key] en cada elemento,
// y cada valor es un array con los elementos que comparten esa clave.
// Si el array está vacío, devuelve {}.
// Recibe: arr (object[]), key (string). Retorna: object (cualquier objeto, claves dinámicas).
// Ejemplo: agruparPor([{tipo:"a", n:1}, {tipo:"b", n:2}, {tipo:"a", n:3}], "tipo")
//          -> { a: [{tipo:"a", n:1}, {tipo:"a", n:3}], b: [{tipo:"b", n:2}] };
//          agruparPor([], "tipo") -> {}.
function agruparPor(arr, key) {
  // TODO: implement
}

export { miMap, miFilter, miReduce, agruparPor };