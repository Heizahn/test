# Learn — Ejercicios de JavaScript con Bun

Ejercicios de práctica en JavaScript. Cada capítulo vive en
`src/NN_topico.js` y sus tests en `test/NN_topico.test.js`.

## Requisitos

- [Bun](https://bun.com) v1.3 o superior. Comprueba con:

  ```bash
  bun --version
  ```

## Instalar dependencias (opcional)

Los tests no importan paquetes de npm, solo `bun:test` (que viene integrado)
y los archivos de `src/`. Aún así `bun install` copia `@types/bun` y
`typescript` desde el `bun.lock`, así que es seguro correrlo:

```bash
bun install
```

## Correr los tests

```bash
bun test          # todos los capítulos
bun run test:01   # solo 01 — Variables y tipos básicos
bun run test:02   # solo 02 — Condicionales
# ... hasta test:10
```

## Cómo trabajar un ejercicio

1. Abre el archivo en `src/`, por ejemplo `src/01_variables_basicos.js`.
2. Implementa la función marcada con `// TODO: implement`.
3. Vuelve a correr sus tests: `bun run test:01`.
4. Cuando pasen todos, pasa al siguiente capítulo.

## Notas

- `index.js` (que imprime "Hello via Bun!") es un residuo de `bun init` y no
  se usa para nada en este proyecto. Puedes borrarlo sin problema.
- El campo `module: "index.js"` en `package.json` tampoco afecta a `bun test`;
  si eliminas `index.js`, quítalo también del manifest.
