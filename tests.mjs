
import {describe, test, expect} from "vitest";
import esm, {check, required} from ".";

import {createRequire} from "module";
const require = createRequire(import.meta.url);
const cjs = require(".");

describe("CJS", () => {

  test("check() returns a boolean value", () => {
    expect(typeof cjs.check()).toBe("boolean");
  });

  test("required() should throw if not elevated and not throw if elevated", () => {
    if (cjs.check())
      expect(() => cjs.required()).not.toThrow();
    else
      expect(() => cjs.required()).toThrow(cjs.defaultMessage);
  });

  test("message can be customized", () => {

    const custom = "Custom elevation message";

    try {

      if (!cjs.check())
        expect(() => cjs.required(custom)).toThrow(custom);

    } finally {
    }
  });

  test("default message can be customized", () => {

    const original = cjs.defaultMessage;
    const custom   = "Custom elevation message";

    try {

      cjs.defaultMessage = custom;

      if (!cjs.check())
        expect(() => cjs.required()).toThrow(custom);

    } finally {
      cjs.defaultMessage = original;
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

});
