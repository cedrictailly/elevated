# elevated

[![npm version](https://img.shields.io/npm/v/elevated.svg)](https://www.npmjs.com/package/elevated)
[![License](https://img.shields.io/npm/l/elevated.svg)](https://github.com/cedrictailly/elevated/blob/main/LICENSE)
[![Downloads](https://img.shields.io/npm/dm/elevated.svg)](https://www.npmjs.com/package/elevated)

Check if a script is executed with elevated permissions:

- Using SUDO on Linux
- From an administrator account on Windows

A lightweight utility to verify and enforce elevated privileges for Node.js applications.

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

#### elevated.check()

```javascript
const elevated = require('elevated');
console.log(
  elevated.check() ? 'elevated' : 'unelevated'
);
```

#### elevated.required()

This way an exception is thrown with a platform specific message if the runtime is not elevated.

```javascript
const elevated = require('elevated');
elevated.required();
```

#### elevated.message

Customize the error message thrown by `required()` when the script is not running with elevated permissions.

```javascript
const elevated = require('elevated');

// Set a custom error message
elevated.message = 'This application requires administrator privileges to run';

// Will throw your custom error message if not elevated
try {
  elevated.required();
} catch (error) {
  console.error(error.message); // Your custom message will be shown
}
```

### ESM (ECMAScript Modules)

#### Using named imports

```javascript
import { check, required, message } from 'elevated';

// Check if elevated
console.log(check() ? 'elevated' : 'unelevated');

// Customize error message
message = 'Custom error message for non-elevated execution';

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

// Check if elevated
console.log(elevated.check() ? 'elevated' : 'unelevated');

// Customize error message
elevated.message = 'Please run as administrator';

// Require elevated permissions
try {
  elevated.required();
  console.log('Script is running with elevated permissions');
} catch (error) {
  console.error('Error:', error.message);
}
```

## Contributing

Contributions, issues and feature requests are welcome. Feel free to check the [issues page](https://github.com/yourusername/elevated/issues) if you want to contribute.

Pull requests for macOS support would be particularly appreciated!
