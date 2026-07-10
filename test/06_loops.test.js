import { describe, test, expect } from "bun:test";
import {
  sumaPares,
  factorial,
  fizzbuzz,
  tablaMultiplicar,
} from "../src/06_loops.js";

describe("04 — Bucles", () => {
  describe("sumaPares", () => {
    test("suma los pares hasta n", () => {
      expect(sumaPares(10)).toBe(30); // 2+4+6+8+10
      expect(sumaPares(1)).toBe(0);
      expect(sumaPares(6)).toBe(12); // 2+4+6
    });

    test("casos de borde chicos", () => {
      expect(sumaPares(2)).toBe(2);   // solo el 2
      expect(sumaPares(3)).toBe(2);   // 2
      expect(sumaPares(4)).toBe(6);   // 2+4
    });

    test("devuelve 0 si n es menor que 1", () => {
      expect(sumaPares(0)).toBe(0);
      expect(sumaPares(-3)).toBe(0);
      expect(sumaPares(-100)).toBe(0);
    });

    test("soporta n grande", () => {
      expect(sumaPares(100)).toBe(2550); // 2+4+...+100
    });

    test("devuelve estrictamente number", () => {
      expect(typeof sumaPares(10)).toBe("number");
    });
  });

  describe("factorial", () => {
    test("casos básicos", () => {
      expect(factorial(0)).toBe(1);
      expect(factorial(1)).toBe(1);
      expect(factorial(5)).toBe(120);
      expect(factorial(6)).toBe(720);
    });

    test("casos intermedios", () => {
      expect(factorial(2)).toBe(2);
      expect(factorial(3)).toBe(6);
      expect(factorial(4)).toBe(24);
    });

    test("casos grandes", () => {
      expect(factorial(10)).toBe(3_628_800);
      expect(factorial(12)).toBe(479_001_600);
    });

    test("devuelve estrictamente number", () => {
      expect(typeof factorial(5)).toBe("number");
    });
  });

  describe("fizzbuzz", () => {
    test("caso pequeño (n=5)", () => {
      expect(fizzbuzz(5)).toEqual([1, 2, "Fizz", 4, "Buzz"]);
    });

    test("caso n=1 devuelve solo [1]", () => {
      expect(fizzbuzz(1)).toEqual([1]);
    });

    test("caso n=2", () => {
      expect(fizzbuzz(2)).toEqual([1, 2]);
    });

    test("caso n=15 completo (valida Fizz, Buzz y FizzBuzz juntos)", () => {
      expect(fizzbuzz(15)).toEqual([
        1, 2, "Fizz", 4, "Buzz",
        "Fizz", 7, 8, "Fizz", "Buzz",
        11, "Fizz", 13, 14, "FizzBuzz",
      ]);
    });

    test("índices clave correctos", () => {
      const result = fizzbuzz(15);
      expect(result[2]).toBe("Fizz");      // 3 → Fizz
      expect(result[4]).toBe("Buzz");      // 5 → Buzz
      expect(result[5]).toBe("Fizz");      // 6 → Fizz
      expect(result[8]).toBe("Fizz");      // 9 → Fizz
      expect(result[9]).toBe("Buzz");      // 10 → Buzz
      expect(result[14]).toBe("FizzBuzz"); // 15 → FizzBuzz
    });

    test("longitud del array coincide con n", () => {
      expect(fizzbuzz(10)).toHaveLength(10);
      expect(fizzbuzz(30)).toHaveLength(30);
    });

    test("los no-múltiplos son números, no strings", () => {
      const result = fizzbuzz(15);
      expect(typeof result[0]).toBe("number");
      expect(typeof result[1]).toBe("number");
      expect(result[3]).toBe(4);
      expect(result[6]).toBe(7);
    });

    test("el resultado es estrictamente un array", () => {
      expect(Array.isArray(fizzbuzz(5))).toBe(true);
    });
  });

  describe("tablaMultiplicar", () => {
    test("construye la tabla desde 0", () => {
      expect(tablaMultiplicar(3, 5)).toEqual([0, 3, 6, 9, 12, 15]);
      expect(tablaMultiplicar(7, 3)).toEqual([0, 7, 14, 21]);
    });

    test("hasta 0 devuelve solo [0]", () => {
      expect(tablaMultiplicar(5, 0)).toEqual([0]);
    });

    test("hasta 1 devuelve [0, num]", () => {
      expect(tablaMultiplicar(4, 1)).toEqual([0, 4]);
      expect(tablaMultiplicar(10, 1)).toEqual([0, 10]);
    });

    test("multiplicar por 0 da todo ceros", () => {
      expect(tablaMultiplicar(0, 5)).toEqual([0, 0, 0, 0, 0, 0]);
    });

    test("tablas grandes", () => {
      const result = tablaMultiplicar(2, 10);
      expect(result).toHaveLength(11); // 0..10 inclusive
      expect(result[10]).toBe(20);
    });

    test("todos los elementos son number", () => {
      const result = tablaMultiplicar(3, 5);
      for (const elem of result) {
        expect(typeof elem).toBe("number");
      }
    });

    test("el resultado es estrictamente un array", () => {
      expect(Array.isArray(tablaMultiplicar(3, 5))).toBe(true);
    });
  });
});