import { describe, test, expect } from "bun:test";
import {
  esPar,
  longitudString,
  areaRectangulo,
  convertirAString,
} from "../src/01_variables_basicos.js";

describe("01 — Variables y tipos básicos", () => {
  describe("esPar", () => {
    test("devuelve true para pares positivos", () => {
      expect(esPar(2)).toBe(true);
      expect(esPar(4)).toBe(true);
      expect(esPar(100)).toBe(true);
    });

    test("el cero se considera par", () => {
      expect(esPar(0)).toBe(true);
    });

    test("devuelve false para impares positivos", () => {
      expect(esPar(1)).toBe(false);
      expect(esPar(7)).toBe(false);
      expect(esPar(14523)).toBe(false);
    });

    test("funciona con números negativos", () => {
      expect(esPar(-2)).toBe(true);
      expect(esPar(-4)).toBe(true);
      expect(esPar(-1)).toBe(false);
      expect(esPar(-5)).toBe(false);
    });

    test("decimales no enteros se consideran impares", () => {
      expect(esPar(4.5)).toBe(false);
      expect(esPar(-2.1)).toBe(false);
      expect(esPar(0.1)).toBe(false);
    });

    test("decimales enteros (X.0) se evalúan correctamente", () => {
      expect(esPar(4.0)).toBe(true);
      expect(esPar(7.0)).toBe(false);
    });

    test("maneja números grandes sin romperse", () => {
      expect(esPar(Number.MAX_SAFE_INTEGER - 1)).toBe(true);
      expect(esPar(Number.MAX_SAFE_INTEGER)).toBe(false);
    });
  });

  describe("longitudString", () => {
    test("cuenta caracteres básicos", () => {
      expect(longitudString("Hola")).toBe(4);
      expect(longitudString("Henry")).toBe(5);
    });

    test("string vacío devuelve 0", () => {
      expect(longitudString("")).toBe(0);
    });

    test("cuenta espacios y saltos de línea como caracteres", () => {
      expect(longitudString("Hola Henry")).toBe(10);
      expect(longitudString("Hola\n")).toBe(5);
      expect(longitudString("  ")).toBe(2);
      expect(longitudString("\t\t")).toBe(2);
    });

    test("cuenta signos de puntuación y símbolos", () => {
      expect(longitudString("¡Hola!")).toBe(6);
      expect(longitudString("¿Qué?")).toBe(5);
      expect(longitudString("100%")).toBe(4);
    });

    test("no se deja engañar por strings numéricos", () => {
      expect(longitudString("12345")).toBe(5);
      expect(longitudString("42")).toBe(2);
    });
  });

  describe("areaRectangulo", () => {
    test("casos básicos con enteros", () => {
      expect(areaRectangulo(3, 4)).toBe(12);
      expect(areaRectangulo(5, 5)).toBe(25);
      expect(areaRectangulo(10, 10)).toBe(100);
    });

    test("si una dimensión es 0, el área es 0", () => {
      expect(areaRectangulo(0, 10)).toBe(0);
      expect(areaRectangulo(10, 0)).toBe(0);
      expect(areaRectangulo(0, 0)).toBe(0);
    });

    test("acepta decimales", () => {
      expect(areaRectangulo(2.5, 4)).toBe(10);
      expect(areaRectangulo(0.5, 0.5)).toBe(0.25);
    });

    test("funciona con números grandes", () => {
      expect(areaRectangulo(1000, 2000)).toBe(2_000_000);
    });

    test("NO concatena como string (debe devolver number)", () => {
      expect(areaRectangulo(3, 4)).not.toBe("34");
      expect(typeof areaRectangulo(3, 4)).toBe("number");
    });

    test("es conmutativo: base*altura === altura*base", () => {
      expect(areaRectangulo(3, 4)).toBe(12);
      expect(areaRectangulo(4, 3)).toBe(12);
    });
  });

  describe("convertirAString", () => {
    test("convierte enteros positivos a string", () => {
      expect(convertirAString(42)).toBe("42");
      expect(convertirAString(100)).toBe("100");
      expect(convertirAString(1)).toBe("1");
    });

    test("convierte cero a string", () => {
      expect(convertirAString(0)).toBe("0");
    });

    test("convierte números negativos preservando el signo", () => {
      expect(convertirAString(-7)).toBe("-7");
      expect(convertirAString(-100)).toBe("-100");
    });

    test("preserva los decimales exactamente", () => {
      expect(convertirAString(3.14)).toBe("3.14");
      expect(convertirAString(0.5)).toBe("0.5");
    });

    test("el resultado es estrictamente string (typeof)", () => {
      expect(typeof convertirAString(42)).toBe("string");
    });

    test("el resultado NO es igual al número original", () => {
      // 42 == "42" es true pero 42 === "42" es false
      expect(convertirAString(42) === 42).toBe(false);
      expect(convertirAString(42) == 42).toBe(true); // coercion
    });
  });
});