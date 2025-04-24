
import {describe, test, expect} from "vitest";
import esm, {check, required} from ".";

import {createRequire} from "module";
const require = createRequire(import.meta.url);
const cjs = require(".");

describe("CommonJS", () => {

  test("check() returns a boolean value", () => {
    expect(typeof cjs.check()).toBe("boolean");
  });

  test("required() should throw if not elevated and not throw if elevated", () => {
    if (cjs.check())
      expect(() => cjs.required()).not.toThrow();
    else
      expect(() => cjs.required()).toThrow(cjs.message);
  });

  test("message can be customized", () => {

    const original = cjs.message;
    const custom   = "Custom elevation message";

    try {

      cjs.message = custom;

      if (!cjs.check())
        expect(() => cjs.required()).toThrow(custom);

    } finally {
      cjs.message = original;
    }
  });
});

describe("ESM", () => {

  test("check and required should be in default export", () => {
    expect(esm.check).toBe(check);
    expect(esm.required).toBe(required);
  });

  test("check and required should be the CommonJS functions", () => {
    expect(esm.check).toBe(cjs.check);
    expect(esm.required).toBe(cjs.required);
  });

  test("message can be customized", () => {
    const originalMessage = esm.message;
    const customMessage = "Custom elevation message";

    try {
      esm.message = customMessage;

      if (!check())
        expect(() => required()).toThrow(customMessage);

    } finally {
      esm.message = originalMessage;
    }
  });

});
