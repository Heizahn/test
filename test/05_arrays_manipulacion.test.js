import { describe, test, expect } from "bun:test";
import {
  eliminarDuplicados,
  aplanar,
  interseccion,
  union,
  chunk,
} from "../src/05_arrays_manipulacion.js";

describe("06 — Arrays: manipulación", () => {
  describe("eliminarDuplicados", () => {
    test("conserva la primera aparición", () => {
      expect(eliminarDuplicados([1, 2, 2, 3, 1, 4])).toEqual([1, 2, 3, 4]);
      expect(eliminarDuplicados(["a", "b", "a", "c"])).toEqual(["a", "b", "c"]);
    });

    test("arrays sin duplicados quedan igual", () => {
      expect(eliminarDuplicados([])).toEqual([]);
      expect(eliminarDuplicados([1, 2, 3])).toEqual([1, 2, 3]);
    });

    test("todos duplicados: queda solo la primera aparición", () => {
      expect(eliminarDuplicados([1, 1, 1, 1])).toEqual([1]);
      expect(eliminarDuplicados(["x", "x", "y", "y"])).toEqual(["x", "y"]);
    });

    test("NO muta el array original", () => {
      const original = [1, 2, 2, 3];
      const copia = eliminarDuplicados(original);
      expect(original).toEqual([1, 2, 2, 3]); // sigue con duplicados
      expect(copia).not.toBe(original);       // es una nueva referencia
    });

    test("devuelve estrictamente array", () => {
      expect(Array.isArray(eliminarDuplicados([1, 2, 2]))).toBe(true);
    });
  });

  describe("aplanar", () => {
    test("aplana un nivel", () => {
      expect(aplanar([1, [2, 3], [4], 5])).toEqual([1, 2, 3, 4, 5]);
      expect(aplanar([[1, 2], [3, 4]])).toEqual([1, 2, 3, 4]);
    });

    test("no recursivo profundo (sub-arrays anidados quedan)", () => {
      expect(aplanar([1, [2, [3, 4]]])).toEqual([1, 2, [3, 4]]);
      expect(aplanar([[1, [2, [3]]]])).toEqual([1, [2, [3]]]);
    });

    test("array vacío devuelve []", () => {
      expect(aplanar([])).toEqual([]);
    });

    test("array sin sub-arrays queda igual", () => {
      expect(aplanar([1, 2, 3])).toEqual([1, 2, 3]);
    });

    test("NO muta el array original", () => {
      const original = [1, [2, 3], [4]];
      const copia = aplanar(original);
      expect(original).toEqual([1, [2, 3], [4]]); // sigue con sub-arrays
      expect(copia).not.toBe(original);
    });

    test("devuelve estrictamente array", () => {
      expect(Array.isArray(aplanar([1, [2, 3]]))).toBe(true);
    });
  });

  describe("interseccion", () => {
    test("elementos comunes sin duplicados", () => {
      expect(interseccion([1, 2, 3, 4], [2, 4, 6])).toEqual([2, 4]);
    });

    test("conserva el orden del primero", () => {
      expect(interseccion([3, 1, 2], [1, 2, 3])).toEqual([3, 1, 2]);
    });

    test("sin elementos comunes devuelve []", () => {
      expect(interseccion([1, 2], [3, 4])).toEqual([]);
    });

    test("maneja duplicados en cualquiera de los dos", () => {
      expect(interseccion([1, 2, 2, 3], [2, 3, 3])).toEqual([2, 3]);
    });

    test("uno de los arrays vacío devuelve []", () => {
      expect(interseccion([], [1, 2, 3])).toEqual([]);
      expect(interseccion([1, 2, 3], [])).toEqual([]);
    });

    test("NO muta ninguno de los arrays originales", () => {
      const a = [1, 2, 3];
      const b = [2, 3, 4];
      const copia = interseccion(a, b);
      expect(a).toEqual([1, 2, 3]);
      expect(b).toEqual([2, 3, 4]);
      expect(copia).not.toBe(a);
      expect(copia).not.toBe(b);
    });

    test("devuelve estrictamente array", () => {
      expect(Array.isArray(interseccion([1, 2], [2]))).toBe(true);
    });
  });

  describe("union", () => {
    test("une sin duplicados", () => {
      expect(union([1, 2, 3], [3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test("orden de primera aparición entre los dos", () => {
      expect(union([2, 1], [1, 3])).toEqual([2, 1, 3]);
    });

    test("maneja duplicados en arr2", () => {
      expect(union([1, 2, 3], [2, 3, 2])).toEqual([1, 2, 3]);
    });

    test("arrays vacíos en distintas combinaciones", () => {
      expect(union([], [1, 2])).toEqual([1, 2]);
      expect(union([1, 2], [])).toEqual([1, 2]);
      expect(union([], [])).toEqual([]);
    });

    test("NO muta ninguno de los arrays originales", () => {
      const a = [1, 2];
      const b = [2, 3];
      const copia = union(a, b);
      expect(a).toEqual([1, 2]);
      expect(b).toEqual([2, 3]);
      expect(copia).not.toBe(a);
      expect(copia).not.toBe(b);
    });

    test("devuelve estrictamente array", () => {
      expect(Array.isArray(union([1], [2]))).toBe(true);
    });
  });

  describe("chunk", () => {
    test("casos exactos", () => {
      expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
    });

    test("último chunk con resto", () => {
      expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });

    test("size mayor que longitud devuelve un único chunk", () => {
      expect(chunk([1, 2, 3], 10)).toEqual([[1, 2, 3]]);
    });

    test("size === 1: cada elemento en su propio chunk", () => {
      expect(chunk([1, 2, 3, 4], 1)).toEqual([[1], [2], [3], [4]]);
    });

    test("size === length: un único chunk", () => {
      expect(chunk([1, 2, 3], 3)).toEqual([[1, 2, 3]]);
    });

    test("array vacío devuelve []", () => {
      expect(chunk([], 3)).toEqual([]);
    });

    test("NO muta el array original", () => {
      const original = [1, 2, 3, 4, 5];
      const copia = chunk(original, 2);
      expect(original).toEqual([1, 2, 3, 4, 5]);
      expect(copia).not.toBe(original);
    });

    test("todos los elementos del resultado son arrays", () => {
      const result = chunk([1, 2, 3, 4, 5], 2);
      expect(Array.isArray(result)).toBe(true);
      for (const elem of result) {
        expect(Array.isArray(elem)).toBe(true);
      }
    });
  });
});