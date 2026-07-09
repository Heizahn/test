import { describe, test, expect } from "bun:test";
import {
  mayorDeTres,
  esPositivo,
  esBisiesto,
  clasificarNota,
  esVocal,
} from "../src/02_condicionales.js";

describe("02 — Condicionales", () => {
  describe("mayorDeTres", () => {
    test("devuelve el mayor de tres números distintos", () => {
      expect(mayorDeTres(3, 7, 5)).toBe(7);
      expect(mayorDeTres(10, 2, 8)).toBe(10);
      expect(mayorDeTres(1, 2, 3)).toBe(3);
    });

    test("funciona con números negativos y cero", () => {
      expect(mayorDeTres(-1, -5, -3)).toBe(-1);
      expect(mayorDeTres(0, -1, -2)).toBe(0);
    });

    test("maneja empates: si hay valores repetidos devuelve ese valor", () => {
      expect(mayorDeTres(5, 5, 3)).toBe(5);
      expect(mayorDeTres(5, 3, 5)).toBe(5);
      expect(mayorDeTres(3, 5, 5)).toBe(5);
      expect(mayorDeTres(7, 7, 7)).toBe(7);
    });

    test("acepta números decimales", () => {
      expect(mayorDeTres(1.5, 2.5, 1.1)).toBe(2.5);
      expect(mayorDeTres(-0.5, -0.1, -0.9)).toBe(-0.1);
    });

    test("funciona con números grandes", () => {
      expect(mayorDeTres(1_000_000, 999_999, 500_000)).toBe(1_000_000);
    });

    test("devuelve estrictamente un number", () => {
      expect(typeof mayorDeTres(1, 2, 3)).toBe("number");
    });
  });

  describe("esPositivo", () => {
    test("clasifica positivos, negativos y cero", () => {
      expect(esPositivo(5)).toBe("positivo");
      expect(esPositivo(-1)).toBe("negativo");
      expect(esPositivo(0)).toBe("cero");
    });

    test("acepta números grandes", () => {
      expect(esPositivo(Number.MAX_SAFE_INTEGER)).toBe("positivo");
      expect(esPositivo(-Number.MAX_SAFE_INTEGER)).toBe("negativo");
    });

    test("acepta decimales", () => {
      expect(esPositivo(0.1)).toBe("positivo");
      expect(esPositivo(-3.14)).toBe("negativo");
    });

    test("devuelve estrictamente un string", () => {
      expect(typeof esPositivo(5)).toBe("string");
      expect(typeof esPositivo(-1)).toBe("string");
      expect(typeof esPositivo(0)).toBe("string");
    });
  });

  describe("esBisiesto", () => {
    test("años divisibles por 4 (no por 100) son bisiestos", () => {
      expect(esBisiesto(4)).toBe(true);
      expect(esBisiesto(1996)).toBe(true);
      expect(esBisiesto(2024)).toBe(true);
    });

    test("siglos múltiplos de 400 sí son bisiestos", () => {
      expect(esBisiesto(1600)).toBe(true);
      expect(esBisiesto(2000)).toBe(true);
      expect(esBisiesto(2400)).toBe(true);
    });

    test("siglos NO múltiplos de 400 NO son bisiestos", () => {
      expect(esBisiesto(1700)).toBe(false);
      expect(esBisiesto(1800)).toBe(false);
      expect(esBisiesto(1900)).toBe(false);
      expect(esBisiesto(2100)).toBe(false);
    });

    test("años comunes no son bisiestos", () => {
      expect(esBisiesto(2023)).toBe(false);
      expect(esBisiesto(2025)).toBe(false);
      expect(esBisiesto(2026)).toBe(false);
      expect(esBisiesto(2027)).toBe(false);
    });

    test("devuelve estrictamente boolean", () => {
      expect(esBisiesto(2024)).toBe(true);
      expect(esBisiesto(2023)).toBe(false);
    });
  });

  describe("clasificarNota", () => {
    test("clasifica correctamente los rangos principales", () => {
      expect(clasificarNota(4)).toBe("Reprobado");
      expect(clasificarNota(5)).toBe("Reprobado");
      expect(clasificarNota(6)).toBe("Aprobado");
      expect(clasificarNota(8)).toBe("Aprobado");
      expect(clasificarNota(9)).toBe("Excelente");
      expect(clasificarNota(10)).toBe("Excelente");
    });

    test("cubre notas intermedias y bordes inferiores", () => {
      expect(clasificarNota(1)).toBe("Reprobado");
      expect(clasificarNota(2)).toBe("Reprobado");
      expect(clasificarNota(3)).toBe("Reprobado");
      expect(clasificarNota(7)).toBe("Aprobado");
    });

    test("decimales se clasifican por su valor numérico", () => {
      expect(clasificarNota(5.9)).toBe("Reprobado");
      expect(clasificarNota(6.1)).toBe("Aprobado");
      expect(clasificarNota(8.99)).toBe("Aprobado");
      expect(clasificarNota(9.5)).toBe("Excelente");
    });

    test("devuelve estrictamente string", () => {
      expect(typeof clasificarNota(7)).toBe("string");
    });
  });

  describe("esVocal", () => {
    test("acepta las 5 vocales en mayúsculas y minúsculas", () => {
      expect(esVocal("a")).toBe(true);
      expect(esVocal("e")).toBe(true);
      expect(esVocal("i")).toBe(true);
      expect(esVocal("o")).toBe(true);
      expect(esVocal("u")).toBe(true);
      expect(esVocal("A")).toBe(true);
      expect(esVocal("E")).toBe(true);
      expect(esVocal("I")).toBe(true);
      expect(esVocal("O")).toBe(true);
      expect(esVocal("U")).toBe(true);
    });

    test("rechaza consonantes, números y string vacío", () => {
      expect(esVocal("b")).toBe(false);
      expect(esVocal("Z")).toBe(false);
      expect(esVocal("1")).toBe(false);
      expect(esVocal("9")).toBe(false);
      expect(esVocal("")).toBe(false);
    });

    test("rechaza símbolos y caracteres especiales", () => {
      expect(esVocal("@")).toBe(false);
      expect(esVocal("#")).toBe(false);
      expect(esVocal("?")).toBe(false);
      expect(esVocal("!")).toBe(false);
      expect(esVocal(" ")).toBe(false);
    });

    test("rechaza vocales acentuadas (asume a/e/i/o/u sin tilde)", () => {
      // Si tu JSDoc dice "vocales sin acento", esto debe ser false
      // Si querés incluirlas, ajustá las expectativas
      expect(esVocal("á")).toBe(false);
      expect(esVocal("é")).toBe(false);
      expect(esVocal("í")).toBe(false);
      expect(esVocal("ó")).toBe(false);
      expect(esVocal("ú")).toBe(false);
    });

    test("devuelve estrictamente boolean", () => {
      expect(esVocal("a")).toBe(true);
      expect(esVocal("b")).toBe(false);
    });
  });
});