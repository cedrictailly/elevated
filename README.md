# elevated

[![npm version](https://img.shields.io/npm/v/elevated.svg)](https://www.npmjs.com/package/elevated)
[![License](https://img.shields.io/npm/l/elevated.svg)](https://github.com/cedrictailly/elevated/blob/main/LICENSE)
[![Downloads](https://img.shields.io/npm/dm/elevated.svg)](https://www.npmjs.com/package/elevated)

Check if a script is executed with elevated permissions:

- Using SUDO on Linux
- From an administrator account on Windows

A lightweight utility to verify and enforce elevated privileges for Node.js applications when you need to perform operations that require administrative rights.

## Compatibility

| Platform | Support |
|----------|---------|
| Windows  | ✅      |
| Linux    | ✅      |
| macOS    | ❌      |

## Installation

```bash
# NPM
npm install elevated

# Yarn
yarn add elevated

# PNPM
pnpm add elevated
```

## Usage examples

### CommonJS (Node.js)

#### Functions

The `check` method returns a boolean indicating if we are elevated or not.

```javascript
console.log(
  require('elevated').check() ? 'elevated' : 'unelevated'
);
```

Using `required` function, an exception is thrown with a platform specific message if the runtime is not elevated.

```javascript
require('elevated').required();
```

#### Custom error message

Customize the error message thrown by `required()` when the script is not running with elevated permissions...

```javascript
require('elevated').required('Please run as administrator');
```

...or by setting-up the default one.

```javascript
require('elevated').defaultMessage = 'Please run as administrator';
```

### ESM (ECMAScript Modules)

#### Using named imports

```javascript
import { check, required } from 'elevated';

// Check if elevated
console.log(check() ? 'elevated' : 'unelevated');

// Require elevated permissions
try {
  required();
  console.log('Script is running with elevated permissions');
} catch (error) {
  console.error('Error:', error.message);
}
```

#### Using default import

```javascript
import elevated from 'elevated';

console.log(elevated.check() ? 'elevated' : 'unelevated');

(...)
```

## Testing

This package includes tests for both standard and elevated permission contexts:

```bash
npm test
```

## Contributing

Contributions, issues and feature requests are welcome. Feel free to check the [issues page](https://github.com/cedrictailly/elevated/issues) if you want to contribute.

Pull requests for macOS support would be particularly appreciated!
