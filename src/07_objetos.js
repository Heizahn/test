/**
 * EJERCICIO 07 — Objetos
 *
 * OBJETIVO: Crear, acceder, copiar y combinar objetos. Trabajar con
 * claves, valores y propiedades dinámicas.
 */

// crearPersona: Devuelve un objeto { nombre, edad }.
// Recibe: nombre (string), edad (number). Retorna: { nombre: string, edad: number }.
// Ejemplo: crearPersona("Ana", 25) -> { nombre: "Ana", edad: 25 }.
//          crearPersona("", 0)     -> { nombre: "", edad: 0 }.   // casos borde aceptados
function crearPersona(nombre, edad) {
  // TODO: implement
}

// contarPropiedades: Devuelve la cantidad de propiedades PROPIAS (no heredadas) del objeto.
// Recibe: obj (object). Retorna: number.
// Ejemplo: contarPropiedades({ a: 1, b: 2, c: 3 }) -> 3;
//          contarPropiedades({})                     -> 0.
function contarPropiedades(obj) {
  // TODO: implement
}

// obtenerClaves: Devuelve un array con las claves PROPIAS del objeto.
// Recibe: obj (object). Retorna: string[].
// Ejemplo: obtenerClaves({ nombre: "Ana", edad: 25 }) -> ["nombre", "edad"];
//          obtenerClaves({})                           -> [].
function obtenerClaves(obj) {
  // TODO: implement
}

// mergeObjetos: Devuelve un NUEVO objeto con todas las claves de obj1 y obj2.
// Si hay claves repetidas, gana el valor de obj2.
// No debe mutar obj1 ni obj2.
// Recibe: obj1 (object), obj2 (object). Retorna: object.
// Ejemplo: mergeObjetos({ a: 1, b: 2 }, { b: 3, c: 4 }) -> { a: 1, b: 3, c: 4 };
//          mergeObjetos({}, { x: 1 })                   -> { x: 1 };
//          mergeObjetos({ a: 1 }, {})                   -> { a: 1 };
//          mergeObjetos({}, {})                         -> {}.
function mergeObjetos(obj1, obj2) {
  // TODO: implement
}

// tienePropiedad: Devuelve true si el objeto tiene la propiedad dada como CLAVE PROPIA
// (incluso si su valor es undefined o null).
// Recibe: obj (object), prop (string). Retorna: boolean.
// Ejemplo: tienePropiedad({ a: 1 }, "a")           -> true;
//          tienePropiedad({ a: 1 }, "b")           -> false;
//          tienePropiedad({}, "a")                 -> false;
//          tienePropiedad({ a: undefined }, "a")   -> true;   // la clave existe aunque su valor sea undefined
//          tienePropiedad({ a: null }, "a")        -> true.
function tienePropiedad(obj, prop) {
  // TODO: implement
}

export { crearPersona, contarPropiedades, obtenerClaves, mergeObjetos, tienePropiedad };