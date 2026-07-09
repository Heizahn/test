import { describe, test, expect } from "bun:test";
import {
  crearPersona,
  contarPropiedades,
  obtenerClaves,
  mergeObjetos,
  tienePropiedad,
} from "../src/07_objetos.js";

describe("07 — Objetos", () => {
  describe("crearPersona", () => {
    test("crea el objeto con ambas propiedades", () => {
      expect(crearPersona("Ana", 25)).toEqual({ nombre: "Ana", edad: 25 });
    });

    test("casos borde (string vacío y edad 0)", () => {
      expect(crearPersona("", 0)).toEqual({ nombre: "", edad: 0 });
    });

    test("edad negativa funciona", () => {
      expect(crearPersona("Test", -5)).toEqual({ nombre: "Test", edad: -5 });
    });

    test("devuelve estrictamente un objeto", () => {
      expect(typeof crearPersona("Ana", 25)).toBe("object");
    });

    test("cada llamada devuelve una NUEVA referencia", () => {
      const p1 = crearPersona("Ana", 25);
      const p2 = crearPersona("Ana", 25);
      expect(p1).toEqual(p2);   // misma data
      expect(p1).not.toBe(p2);  // pero distinta referencia
    });
  });

  describe("contarPropiedades", () => {
    test("cuenta las claves propias", () => {
      expect(contarPropiedades({ a: 1, b: 2, c: 3 })).toBe(3);
    });

    test("objeto vacío devuelve 0", () => {
      expect(contarPropiedades({})).toBe(0);
    });

    test("cuenta con cualquier tipo de valor", () => {
      const obj = {
        str: "x",
        num: 1,
        bool: true,
        nul: null,
        undef: undefined,
        arr: [1, 2, 3],
        nested: { a: 1 },
        emptyStr: "",
      };
      expect(contarPropiedades(obj)).toBe(8);
    });

    test("devuelve estrictamente number", () => {
      expect(typeof contarPropiedades({ a: 1 })).toBe("number");
    });
  });

  describe("obtenerClaves", () => {
    test("devuelve las claves en array", () => {
      expect(obtenerClaves({ nombre: "Ana", edad: 25 })).toEqual(["nombre", "edad"]);
    });

    test("objeto vacío -> array vacío", () => {
      expect(obtenerClaves({})).toEqual([]);
    });

    test("objeto de una sola clave", () => {
      expect(obtenerClaves({ solo: 1 })).toEqual(["solo"]);
    });

    test("funciona con valores de cualquier tipo", () => {
      const result = obtenerClaves({ str: "x", num: 1, bool: true });
      expect(result).toHaveLength(3);
    });

    test("devuelve estrictamente array", () => {
      expect(Array.isArray(obtenerClaves({ a: 1, b: 2 }))).toBe(true);
    });
  });

  describe("mergeObjetos", () => {
    test("combina sin mutar los originales", () => {
      const a = { a: 1, b: 2 };
      const b = { b: 3, c: 4 };
      expect(mergeObjetos(a, b)).toEqual({ a: 1, b: 3, c: 4 });
      expect(a).toEqual({ a: 1, b: 2 });
      expect(b).toEqual({ b: 3, c: 4 });
    });

    test("con objetos vacíos (varias combinaciones)", () => {
      expect(mergeObjetos({}, { x: 1 })).toEqual({ x: 1 });
      expect(mergeObjetos({ x: 1 }, {})).toEqual({ x: 1 });
      expect(mergeObjetos({}, {})).toEqual({});
    });

    test("objetos idénticos", () => {
      expect(mergeObjetos({ a: 1 }, { a: 1 })).toEqual({ a: 1 });
    });

    test("obj2 gana en conflicto", () => {
      expect(mergeObjetos({ x: "a" }, { x: "b" })).toEqual({ x: "b" });
    });

    test("devuelve un NUEVO objeto (no referencia a obj1 u obj2)", () => {
      const a = { a: 1 };
      const b = { b: 2 };
      const result = mergeObjetos(a, b);
      expect(result).not.toBe(a);
      expect(result).not.toBe(b);
    });

    test("preserva los tipos de los valores (no coerce)", () => {
      const result = mergeObjetos({ a: 1 }, { b: "x", c: true });
      expect(typeof result.a).toBe("number");
      expect(typeof result.b).toBe("string");
      expect(typeof result.c).toBe("boolean");
    });

    test("devuelve estrictamente object", () => {
      expect(typeof mergeObjetos({ a: 1 }, { b: 2 })).toBe("object");
    });
  });

  describe("tienePropiedad", () => {
    test("detecta si la clave existe", () => {
      expect(tienePropiedad({ a: 1 }, "a")).toBe(true);
      expect(tienePropiedad({ a: 1 }, "b")).toBe(false);
    });

    test("valores falsy cuentan como propiedad existente", () => {
      expect(tienePropiedad({ x: 0 }, "x")).toBe(true);
      expect(tienePropiedad({ x: null }, "x")).toBe(true);
      expect(tienePropiedad({ x: false }, "x")).toBe(true);
      expect(tienePropiedad({ x: "" }, "x")).toBe(true);
    });

    test("valor undefined TAMBIÉN cuenta como clave existente", () => {
      // Test crítico: si el alumno usa `obj[prop] !== undefined` falla acá
      expect(tienePropiedad({ a: undefined }, "a")).toBe(true);
    });

    test("objeto vacío devuelve false para cualquier clave", () => {
      expect(tienePropiedad({}, "a")).toBe(false);
      expect(tienePropiedad({}, "no-existe")).toBe(false);
    });

    test("devuelve estrictamente boolean", () => {
      expect(typeof tienePropiedad({ a: 1 }, "a")).toBe("boolean");
      expect(typeof tienePropiedad({ a: 1 }, "b")).toBe("boolean");
    });
  });
});