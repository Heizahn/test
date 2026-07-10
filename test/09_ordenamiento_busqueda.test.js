import { describe, test, expect } from "bun:test";
import {
  busquedaLineal,
  busquedaBinaria,
  bubbleSort,
  ordenarPor,
} from "../src/09_ordenamiento_busqueda.js";

describe("09 — Búsqueda y ordenamiento", () => {
  describe("busquedaLineal", () => {
    test("encuentra el elemento y devuelve su índice", () => {
      expect(busquedaLineal([4, 2, 7, 1], 7)).toBe(2);
      expect(busquedaLineal(["a", "b", "c"], "b")).toBe(1);
    });

    test("devuelve -1 si no encuentra", () => {
      expect(busquedaLineal([1, 2, 3], 99)).toBe(-1);
      expect(busquedaLineal([], 1)).toBe(-1);
    });

    test("devuelve PRIMERA aparición (no la última)", () => {
      expect(busquedaLineal([1, 2, 3, 2, 1], 2)).toBe(1);
      expect(busquedaLineal([5, 5, 5], 5)).toBe(0);
    });

    test("encuentra en posición inicial o final", () => {
      expect(busquedaLineal([10, 1, 2, 3], 10)).toBe(0);
      expect(busquedaLineal([1, 2, 3, 10], 10)).toBe(3);
    });

    test("usa === estricta (1 NO es === \"1\")", () => {
      // Si el alumno usa == en vez de ===, podría fallar la regla "estrictamente igual"
      expect(busquedaLineal([1, "1", 2], "1")).toBe(1); // "1" en index 1
      expect(busquedaLineal([1, "1", 2], 1)).toBe(0);   // 1 en index 0
    });

    test("devuelve estrictamente number", () => {
      expect(typeof busquedaLineal([1, 2], 1)).toBe("number");
      expect(typeof busquedaLineal([1, 2], 99)).toBe("number");
    });
  });

  describe("busquedaBinaria", () => {
    test("encuentra en array ordenado", () => {
      expect(busquedaBinaria([1, 3, 5, 7, 9, 11], 7)).toBe(3);
      expect(busquedaBinaria([1, 3, 5, 7, 9, 11], 1)).toBe(0);
      expect(busquedaBinaria([1, 3, 5, 7, 9, 11], 11)).toBe(5);
    });

    test("devuelve -1 si no encuentra", () => {
      expect(busquedaBinaria([1, 3, 5, 7, 9, 11], 4)).toBe(-1);
    });

    test("array vacío devuelve -1", () => {
      expect(busquedaBinaria([], 5)).toBe(-1);
    });

    test("array de un solo elemento (match y no match)", () => {
      expect(busquedaBinaria([5], 5)).toBe(0);
      expect(busquedaBinaria([5], 3)).toBe(-1);
    });

    test("acepta números negativos", () => {
      expect(busquedaBinaria([-10, -5, -1, 0, 5], -5)).toBe(1);
      expect(busquedaBinaria([-10, -5, -1, 0, 5], 0)).toBe(3);
    });

    test("devuelve estrictamente number", () => {
      expect(typeof busquedaBinaria([1, 2], 1)).toBe("number");
    });
  });

  describe("bubbleSort", () => {
    test("ordena ascendentemente sin mutar el original", () => {
      const original = [5, 2, 8, 1, 4];
      const sorted = bubbleSort(original);
      expect(sorted).toEqual([1, 2, 4, 5, 8]);
      expect(original).toEqual([5, 2, 8, 1, 4]);
    });

    test("casos borde", () => {
      expect(bubbleSort([])).toEqual([]);
      expect(bubbleSort([1])).toEqual([1]);
      expect(bubbleSort([2, 1])).toEqual([1, 2]);
    });

    test("array ya ordenado queda igual", () => {
      expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test("array inverso se ordena completo", () => {
      expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });

    test("acepta números negativos", () => {
      expect(bubbleSort([-3, -1, -2])).toEqual([-3, -2, -1]);
      expect(bubbleSort([3, -1, 0, -2])).toEqual([-2, -1, 0, 3]);
    });

    test("maneja duplicados", () => {
      expect(bubbleSort([3, 1, 3, 1, 3])).toEqual([1, 1, 3, 3, 3]);
    });

    test("devuelve una NUEVA referencia", () => {
      const arr = [3, 1, 2];
      const sorted = bubbleSort(arr);
      expect(sorted).toEqual([1, 2, 3]); // hace el trabajo esperado
      expect(sorted).not.toBe(arr);
    });

    test("devuelve estrictamente array", () => {
      expect(Array.isArray(bubbleSort([3, 1, 2]))).toBe(true);
    });
  });

  describe("ordenarPor", () => {
    test("ordena por propiedad numérica", () => {
      const input = [{ edad: 30 }, { edad: 22 }, { edad: 25 }];
      expect(ordenarPor(input, "edad")).toEqual([
        { edad: 22 },
        { edad: 25 },
        { edad: 30 },
      ]);
    });

    test("no muta el array original", () => {
      const original = [{ n: 3 }, { n: 1 }, { n: 2 }];
      const sorted = ordenarPor(original, "n");
      expect(sorted).toEqual([{ n: 1 }, { n: 2 }, { n: 3 }]);
      expect(original).toEqual([{ n: 3 }, { n: 1 }, { n: 2 }]);
    });

    test("ordena por propiedad string (alfabético)", () => {
      const input = [
        { nombre: "Carlos" },
        { nombre: "Ana" },
        { nombre: "Bea" },
      ];
      expect(ordenarPor(input, "nombre")).toEqual([
        { nombre: "Ana" },
        { nombre: "Bea" },
        { nombre: "Carlos" },
      ]);
    });

    test("array vacío devuelve []", () => {
      expect(ordenarPor([], "x")).toEqual([]);
    });

    test("array de un solo elemento", () => {
      expect(ordenarPor([{ edad: 30 }], "edad")).toEqual([{ edad: 30 }]);
    });

    test("estabilidad: objetos con igual valor mantienen orden original", () => {
      const input = [
        { nombre: "A", orden: 1 },
        { nombre: "B", orden: 2 },
        { nombre: "C", orden: 1 },
      ];
      const sorted = ordenarPor(input, "orden");
      // A y C tienen orden=1. Si ordenPor es estable, A va antes que C.
      expect(sorted).toEqual([
        { nombre: "A", orden: 1 },
        { nombre: "C", orden: 1 },
        { nombre: "B", orden: 2 },
      ]);
    });

    test("devuelve una NUEVA referencia", () => {
      const arr = [{ n: 3 }, { n: 1 }];
      const sorted = ordenarPor(arr, "n");
      expect(sorted).toEqual([{ n: 1 }, { n: 3 }]); // hace el trabajo esperado
      expect(sorted).not.toBe(arr);
    });

    test("devuelve estrictamente array", () => {
      expect(Array.isArray(ordenarPor([{ n: 1 }], "n"))).toBe(true);
    });
  });
});