import { describe, test, expect } from "bun:test";
import {
  miMap,
  miFilter,
  miReduce,
  agruparPor,
} from "../src/08_orden_superior.js";

describe("08 — Funciones de orden superior", () => {
  describe("miMap", () => {
    test("transforma cada elemento", () => {
      expect(miMap([1, 2, 3], (x) => x * 2)).toEqual([2, 4, 6]);
      expect(miMap(["a", "b"], (s) => s.toUpperCase())).toEqual(["A", "B"]);
    });

    test("no muta el original", () => {
      const original = [1, 2, 3];
      miMap(original, (x) => x * 2);
      expect(original).toEqual([1, 2, 3]);
    });

    test("devuelve array vacío con input vacío", () => {
      expect(miMap([], (x) => x)).toEqual([]);
    });

    test("pasa el índice como segundo argumento a fn", () => {
      // Si el alumno implementa `fn(arr[i])` sin pasar el índice, este test falla
      expect(miMap([10, 20, 30], (x, i) => x + i)).toEqual([10, 21, 32]);
    });

    test("devuelve una NUEVA referencia (no la misma)", () => {
      const arr = [1, 2, 3];
      const result = miMap(arr, (x) => x);
      expect(result).not.toBe(arr);
      expect(result).toEqual(arr); // misma data, distinto array
    });

    test("funciona con distintos tipos en el mismo array", () => {
      const result = miMap([1, "a", true, null], (x) => typeof x);
      expect(result).toEqual(["number", "string", "boolean", "object"]);
    });

    test("devuelve estrictamente array", () => {
      expect(Array.isArray(miMap([1, 2], (x) => x))).toBe(true);
    });
  });

  describe("miFilter", () => {
    test("filtra según predicado", () => {
      expect(miFilter([1, 2, 3, 4], (x) => x % 2 === 0)).toEqual([2, 4]);
    });

    test("ningún elemento cumple -> []", () => {
      expect(miFilter([1, 2, 3], () => false)).toEqual([]);
    });

    test("todos los elementos cumplen -> mismo array filtrado", () => {
      expect(miFilter([1, 2, 3], () => true)).toEqual([1, 2, 3]);
    });

    test("array vacío -> []", () => {
      expect(miFilter([], () => true)).toEqual([]);
    });

    test("pasa el índice como segundo argumento a fn", () => {
      // Si el alumno no pasa `i`, este test falla
      expect(miFilter([10, 20, 30, 40], (x, i) => i % 2 === 0)).toEqual([10, 30]);
    });

    test("no muta el original", () => {
      const original = [1, 2, 3, 4];
      miFilter(original, (x) => x % 2 === 0);
      expect(original).toEqual([1, 2, 3, 4]);
    });

    test("devuelve una NUEVA referencia", () => {
      const arr = [1, 2, 3];
      const result = miFilter(arr, () => true);
      expect(result).not.toBe(arr);
    });

    test("devuelve estrictamente array", () => {
      expect(Array.isArray(miFilter([1, 2], (x) => x > 0))).toBe(true);
    });
  });

  describe("miReduce", () => {
    test("reduce con valor inicial", () => {
      expect(miReduce([1, 2, 3, 4], (acc, x) => acc + x, 0)).toBe(10);
      expect(
        miReduce(
          ["a", "b", "c"],
          (acc, s) => acc + s,
          "",
        ),
      ).toBe("abc");
    });

    test("reduce sin valor inicial usa el primer elemento", () => {
      expect(miReduce([1, 2, 3, 4], (acc, x) => acc + x)).toBe(10);
    });

    test("array vacío con init devuelve init", () => {
      expect(miReduce([], (acc, x) => acc + x, 42)).toBe(42);
    });

    test("array vacío SIN init devuelve undefined", () => {
      expect(miReduce([], (acc, x) => acc + x)).toBeUndefined();
    });

    test("array de un solo elemento con init aplica fn una vez", () => {
      // [5] con init=10 → fn(10, 5) → 15
      expect(miReduce([5], (acc, x) => acc + x, 10)).toBe(15);
    });

    test("array de un solo elemento sin init devuelve ese elemento", () => {
      // [5] sin init → 5 (fn nunca se llama, primer elem es el acc inicial)
      expect(miReduce([5], (acc, x) => acc + x)).toBe(5);
    });

    test("acepta cualquier tipo de acumulador y elementos", () => {
      expect(
        miReduce(["x", "y", "z"], (acc, s) => acc + "-" + s, "ini"),
      ).toBe("ini-x-y-z");

      expect(
        miReduce(
          [{ k: "a", v: 1 }, { k: "b", v: 2 }],
          (acc, x) => ({ ...acc, [x.k]: x.v }),
          {},
        ),
      ).toEqual({ a: 1, b: 2 });
    });

    test("no muta el array original", () => {
      const original = [1, 2, 3];
      miReduce(original, (acc, x) => acc + x, 0);
      expect(original).toEqual([1, 2, 3]);
    });
  });

  describe("agruparPor", () => {
    test("agrupa por clave", () => {
      const input = [
        { tipo: "a", n: 1 },
        { tipo: "b", n: 2 },
        { tipo: "a", n: 3 },
      ];
      expect(agruparPor(input, "tipo")).toEqual({
        a: [
          { tipo: "a", n: 1 },
          { tipo: "a", n: 3 },
        ],
        b: [{ tipo: "b", n: 2 }],
      });
    });

    test("array vacío -> objeto vacío", () => {
      expect(agruparPor([], "x")).toEqual({});
    });

    test("todos los elementos con la misma clave -> un solo grupo", () => {
      expect(
        agruparPor(
          [{ tipo: "a", n: 1 }, { tipo: "a", n: 2 }, { tipo: "a", n: 3 }],
          "tipo",
        ),
      ).toEqual({
        a: [
          { tipo: "a", n: 1 },
          { tipo: "a", n: 2 },
          { tipo: "a", n: 3 },
        ],
      });
    });

    test("array de un solo elemento", () => {
      expect(agruparPor([{ k: "x", v: 1 }], "k")).toEqual({
        x: [{ k: "x", v: 1 }],
      });
    });

    test("acepta valores de clave numéricos", () => {
      expect(
        agruparPor(
          [{ edad: 20, n: 1 }, { edad: 30, n: 2 }, { edad: 20, n: 3 }],
          "edad",
        ),
      ).toEqual({
        20: [{ edad: 20, n: 1 }, { edad: 20, n: 3 }],
        30: [{ edad: 30, n: 2 }],
      });
    });

    test("no muta el array original", () => {
      const original = [{ tipo: "a", n: 1 }, { tipo: "b", n: 2 }];
      agruparPor(original, "tipo");
      expect(original).toEqual([
        { tipo: "a", n: 1 },
        { tipo: "b", n: 2 },
      ]);
    });

    test("devuelve estrictamente object", () => {
      expect(typeof agruparPor([{ k: "x" }], "k")).toBe("object");
    });

    test("los valores del objeto son arrays", () => {
      const result = agruparPor(
        [{ tipo: "a", n: 1 }, { tipo: "a", n: 2 }],
        "tipo",
      );
      expect(Array.isArray(result.a)).toBe(true);
    });
  });
});