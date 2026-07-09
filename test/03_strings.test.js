import { describe, test, expect } from "bun:test";
import {
  invertirString,
  contarVocales,
  esPalindromo,
  capitalizar,
} from "../src/03_strings.js";

describe("03 — Strings", () => {
  describe("invertirString", () => {
    test("invierte el orden de los caracteres", () => {
      expect(invertirString("hola")).toBe("aloh");
      expect(invertirString("Henry")).toBe("yrneH");
    });

    test("casos borde", () => {
      expect(invertirString("")).toBe("");
      expect(invertirString("a")).toBe("a");
    });

    test("preserva espacios y símbolos tal cual", () => {
      expect(invertirString("Hola Mundo")).toBe("odnuM aloH");
      expect(invertirString("¡Hola!")).toBe("!aloH¡");
    });

    test("devuelve estrictamente string", () => {
      expect(typeof invertirString("hola")).toBe("string");
    });
  });

  describe("contarVocales", () => {
    test("cuenta vocales en mayúsculas y minúsculas", () => {
      expect(contarVocales("AEIOU")).toBe(5);
      expect(contarVocales("aeiou")).toBe(5);
      expect(contarVocales("murcielago")).toBe(5);
    });

    test('NO cuenta la "y" como vocal', () => {
      expect(contarVocales("Henry")).toBe(1);    // solo la "e"
      expect(contarVocales("rhythm")).toBe(0);
      expect(contarVocales("y")).toBe(0);
    });

    test("devuelve 0 si no hay vocales", () => {
      expect(contarVocales("rhythm")).toBe(0);
      expect(contarVocales("xyz")).toBe(0);
      expect(contarVocales("")).toBe(0);
    });

    test("cuenta vocales repetidas", () => {
      expect(contarVocales("aaaiii")).toBe(6);
      expect(contarVocales("aaaaa")).toBe(5);
    });

    test("ignora números, espacios y símbolos", () => {
      expect(contarVocales("h0l4")).toBe(1);    // el "0" cuenta como "o"?
      expect(contarVocales("!!!")).toBe(0);
    });

    test("devuelve estrictamente number", () => {
      expect(typeof contarVocales("Henry")).toBe("number");
    });
  });

  describe("esPalindromo", () => {
    test("reconoce palíndromos simples ignorando mayúsculas", () => {
      expect(esPalindromo("reconocer")).toBe(true);
      expect(esPalindromo("Ana")).toBe(true);
      expect(esPalindromo("oso")).toBe(true);
    });

    test("rechaza no-palíndromos", () => {
      expect(esPalindromo("Henry")).toBe(false);
      expect(esPalindromo("JavaScript")).toBe(false);
    });

    test("string vacío es palíndromo", () => {
      expect(esPalindromo("")).toBe(true);
    });

    test("un solo carácter es palíndromo", () => {
      expect(esPalindromo("a")).toBe(true);
      expect(esPalindromo("Z")).toBe(true);
    });

    test("palíndromos pares", () => {
      expect(esPalindromo("abba")).toBe(true);
      expect(esPalindromo("ABba")).toBe(true);
      expect(esPalindromo("abca")).toBe(false);
    });

    test("los espacios cuentan (no se ignoran)", () => {
      expect(esPalindromo("anita lava la tina")).toBe(false);
    });

    test("devuelve estrictamente boolean", () => {
      expect(esPalindromo("oso")).toBe(true);
      expect(esPalindromo("Henry")).toBe(false);
    });
  });

  describe("capitalizar", () => {
    test("primera mayúscula y resto minúscula", () => {
      expect(capitalizar("hola")).toBe("Hola");
      expect(capitalizar("HOLA")).toBe("Hola");
      expect(capitalizar("hOLA MUNDO")).toBe("Hola mundo");
    });

    test("string de un solo carácter", () => {
      expect(capitalizar("a")).toBe("A");
      expect(capitalizar("Z")).toBe("Z");
      expect(capitalizar("z")).toBe("Z");
    });

    test("preserva caracteres no alfabéticos", () => {
      expect(capitalizar("hola123")).toBe("Hola123");
      expect(capitalizar("hola-mundo")).toBe("Hola-mundo");
    });

    test("devuelve estrictamente string", () => {
      expect(typeof capitalizar("hola")).toBe("string");
    });
  });
});