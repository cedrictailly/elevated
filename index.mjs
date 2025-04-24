/**
 * @author Cédric Tailly
 * @description Check if script is executed in an elevated mode : with sudo on Linux and from an administrator account on Windows.
 */

import {createRequire} from "module";

const elevated = createRequire(import.meta.url)("./index.cjs");

export const check    = elevated.check;
export const required = elevated.required;

export default elevated;
