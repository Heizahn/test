import { describe, test, expect } from "bun:test";
import {
  factorialRec,
  fibonacci,
  sumaDigitos,
  potencia,
} from "../src/10_recursion.js";

describe("10 — Recursión", () => {
  describe("factorialRec", () => {
    test("casos base y pequeños", () => {
      expect(factorialRec(0)).toBe(1);
      expect(factorialRec(1)).toBe(1);
      expect(factorialRec(5)).toBe(120);
      expect(factorialRec(7)).toBe(5040);
    });

    test("caso más grande", () => {
      expect(factorialRec(10)).toBe(3_628_800);
    });

    test("devuelve estrictamente number", () => {
      expect(typeof factorialRec(5)).toBe("number");
    });
  });

  describe("fibonacci", () => {
    test("primeros términos de la serie (0-indexado)", () => {
      expect(fibonacci(0)).toBe(0);
      expect(fibonacci(1)).toBe(1);
      expect(fibonacci(2)).toBe(1);
      expect(fibonacci(3)).toBe(2);
      expect(fibonacci(4)).toBe(3);
      expect(fibonacci(5)).toBe(5);
      expect(fibonacci(6)).toBe(8);
    });

    test("términos más grandes (cap a 15 por costo exponencial)", () => {
      // fib recursivo naive es O(2^n); sin memoización, valores grandes tardan
      expect(fibonacci(10)).toBe(55);
      expect(fibonacci(12)).toBe(144);
      expect(fibonacci(15)).toBe(610);
    });

    test("devuelve estrictamente number", () => {
      expect(typeof fibonacci(5)).toBe("number");
    });
  });

  describe("sumaDigitos", () => {
    test("positivos", () => {
      expect(sumaDigitos(123)).toBe(6);
      expect(sumaDigitos(9999)).toBe(36);
      expect(sumaDigitos(0)).toBe(0);
    });

    test("negativos (valor absoluto)", () => {
      expect(sumaDigitos(-45)).toBe(9);
      expect(sumaDigitos(-7)).toBe(7);
      expect(sumaDigitos(-100)).toBe(1); // |n|=100 → 1+0+0 = 1
    });

    test("un solo dígito (caso base)", () => {
      expect(sumaDigitos(7)).toBe(7);
      expect(sumaDigitos(1)).toBe(1);
      expect(sumaDigitos(9)).toBe(9);
    });

    test("números con ceros intermedios", () => {
      expect(sumaDigitos(100)).toBe(1);   // 1+0+0
      expect(sumaDigitos(1010)).toBe(2);  // 1+0+1+0
      expect(sumaDigitos(-105)).toBe(6);  // |−105| → 1+0+5
    });

    test("devuelve estrictamente number", () => {
      expect(typeof sumaDigitos(123)).toBe("number");
    });
  });

  describe("potencia", () => {
    test("casos básicos", () => {
      expect(potencia(2, 0)).toBe(1);
      expect(potencia(2, 5)).toBe(32);
      expect(potencia(3, 3)).toBe(27);
      expect(potencia(5, 1)).toBe(5);
    });

    test("con base negativa (par e impar)", () => {
      expect(potencia(-2, 3)).toBe(-8); // impar
      expect(potencia(-2, 4)).toBe(16); // par
    });

    test("base cero con exp > 0 da cero", () => {
      expect(potencia(0, 5)).toBe(0);
    });

    test("base 1 a cualquier exp da 1", () => {
      expect(potencia(1, 100)).toBe(1);
    });

    test("cualquier base^0 = 1 (incluso base 0) por convención", () => {
      // Convención matemática: base^0 = 1 para cualquier base
      expect(potencia(0, 0)).toBe(1);
    });

    test("devuelve estrictamente number", () => {
      expect(typeof potencia(2, 5)).toBe("number");
    });
  });
});