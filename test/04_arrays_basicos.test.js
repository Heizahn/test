import { describe, test, expect } from "bun:test";
import {
  maximo,
  minimo,
  segundoMayor,
  filtrarMayores,
  sumar,
} from "../src/05_arrays_basicos.js";

describe("05 — Arrays: básicos", () => {
  describe("maximo", () => {
    test("encuentra el mayor", () => {
      expect(maximo([3, 1, 4, 1, 5, 9, 2, 6])).toBe(9);
    });

    test("array de un solo elemento", () => {
      expect(maximo([7])).toBe(7);
    });

    test("con números negativos", () => {
      expect(maximo([-1, -5, -3, -2])).toBe(-1);
    });

    test("el máximo en posición inicial o final", () => {
      expect(maximo([10, 1, 2, 3])).toBe(10);
      expect(maximo([1, 2, 3, 10])).toBe(10);
    });

    test("acepta decimales", () => {
      expect(maximo([1.5, 2.7, 2.6])).toBe(2.7);
    });

    test("devuelve estrictamente number", () => {
      expect(typeof maximo([3, 1, 4])).toBe("number");
    });
  });

  describe("minimo", () => {
    test("encuentra el menor", () => {
      expect(minimo([3, 1, 4, 1, 5])).toBe(1);
    });

    test("con números negativos", () => {
      expect(minimo([-10, -5, -3, -20])).toBe(-20);
    });

    test("array de un solo elemento", () => {
      expect(minimo([7])).toBe(7);
    });

    test("el mínimo en posición inicial o final", () => {
      expect(minimo([0, 5, 10, 15])).toBe(0);
      expect(minimo([5, 10, 15, 1])).toBe(1);
    });

    test("acepta decimales", () => {
      expect(minimo([1.5, 2.7, 2.6])).toBe(1.5);
    });

    test("devuelve estrictamente number", () => {
      expect(typeof minimo([3, 1, 4])).toBe("number");
    });
  });

  describe("segundoMayor", () => {
    test("encuentra el segundo más grande", () => {
      expect(segundoMayor([3, 1, 4, 1, 5, 9, 2, 6])).toBe(6);
      expect(segundoMayor([10, 20, 30, 40])).toBe(30);
    });

    test("ignora duplicados del mayor", () => {
      // Si el mayor aparece varias veces, el segundo más grande distinto sigue siendo el próximo valor
      expect(segundoMayor([9, 9, 6, 3])).toBe(6);
      expect(segundoMayor([5, 4, 3, 5, 3])).toBe(4);
    });

    test("array de dos elementos distintos", () => {
      expect(segundoMayor([5, 3])).toBe(3);
    });

    test("devuelve null si no existe", () => {
      expect(segundoMayor([5])).toBe(null);
      expect(segundoMayor([5, 5, 5])).toBe(null);
      expect(segundoMayor([5, 5])).toBe(null); // dos iguales → no hay segundo distinto
      expect(segundoMayor([])).toBe(null);
    });

    test("devuelve estrictamente number o null", () => {
      const numResult = segundoMayor([3, 1, 4, 1, 5, 9, 2, 6]);
      const nullResult = segundoMayor([5]);
      expect(typeof numResult).toBe("number");
      expect(nullResult).toBeNull();
    });
  });

  describe("filtrarMayores", () => {
    test("filtra mayores que n", () => {
      expect(filtrarMayores([1, 5, 3, 8, 2], 3)).toEqual([5, 8]);
    });

    test("array vacío devuelve []", () => {
      expect(filtrarMayores([], 3)).toEqual([]);
    });

    test("ningún elemento cumple", () => {
      expect(filtrarMayores([1, 2, 3], 10)).toEqual([]);
    });

    test("es estrictamente mayor (no incluye igual a n)", () => {
      expect(filtrarMayores([1, 3, 5], 3)).toEqual([5]);
      expect(filtrarMayores([3, 3, 3], 3)).toEqual([]);
    });

    test("acepta n negativo (todos cumplen)", () => {
      expect(filtrarMayores([1, 5, 3, 8, 2], -5)).toEqual([1, 5, 3, 8, 2]);
    });

    test("devuelve estrictamente array de numbers", () => {
      const result = filtrarMayores([1, 5, 3, 8, 2], 3);
      expect(Array.isArray(result)).toBe(true);
      for (const elem of result) {
        expect(typeof elem).toBe("number");
      }
    });
  });

  describe("sumar", () => {
    test("suma elementos del array", () => {
      expect(sumar([1, 2, 3, 4])).toBe(10);
      expect(sumar([10])).toBe(10);
    });

    test("array vacío devuelve 0", () => {
      expect(sumar([])).toBe(0);
    });

    test("con números negativos", () => {
      expect(sumar([1, -1, 2, -2])).toBe(0);
      expect(sumar([-5, -10])).toBe(-15);
    });

    test("decimales (usando toBeCloseTo por floating point)", () => {
      // 0.1 + 0.2 + 0.3 !== 0.6 en punto flotante, por eso toBeCloseTo
      expect(sumar([0.1, 0.2, 0.3])).toBeCloseTo(0.6);
    });

    test("suma 1 a 100 = 5050 (clásico)", () => {
      const arr = Array.from({ length: 100 }, (_, i) => i + 1);
      expect(sumar(arr)).toBe(5050);
    });

    test("devuelve estrictamente number", () => {
      expect(typeof sumar([1, 2, 3, 4])).toBe("number");
    });
  });
});