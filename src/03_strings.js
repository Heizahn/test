/**
 * EJERCICIO 03 — Manipulación de strings
 *
 * OBJETIVO: Practicar métodos de strings, indexación, concatenación
 * y trabajo con caracteres individuales.
 */

// invertirString: Devuelve el string con los caracteres en orden inverso.
// Recibe: str (string). Retorna: string.
// Ejemplo: invertirString("hola") -> "aloh".
function invertirString(str) {
  // TODO: implement
}

// contarVocales: Devuelve la cantidad de vocales (a,e,i,o,u, sin tildes ni "y")
// en el string, contando mayúsculas y minúsculas.
// Recibe: str (string). Retorna: number.
// Ejemplo: contarVocales("Henry") -> 1;     // solo la "e"
//          contarVocales("AEIOU") -> 5.
function contarVocales(str) {
  // TODO: implement
}

// esPalindromo: Devuelve true si el string se lee igual al derecho y al revés,
// ignorando mayúsculas y minúsculas. Los espacios y símbolos cuentan.
// Recibe: str (string). Retorna: boolean.
// Ejemplo: esPalindromo("reconocer") -> true;
//          esPalindromo("Henry") -> false.
function esPalindromo(str) {
  // TODO: implement
}

// capitalizar: Devuelve el string con la primera letra en mayúscula
// y todo el resto del string en minúscula.
// Recibe: str (string no vacío). Retorna: string.
// Ejemplo: capitalizar("hola mundo") -> "Hola mundo";
//          capitalizar("HOLA") -> "Hola".
function capitalizar(str) {
  // TODO: implement
}

export { invertirString, contarVocales, esPalindromo, capitalizar };