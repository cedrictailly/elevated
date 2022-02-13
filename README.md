# elevated
Check if script is executed in an elevated mode : with sudo on Linux and from an administrator account on Windows.

# Installation
## NPM
```bash
npm install -s elevated
```
## Yarn
```bash
yarn add elevated
```

# Usage example

## ES6 style
```javascript
console.log(await require('elevated').check() ? 'elevated' : 'unelevated');
```

## Callback style
```javascript
require('elevated').check().then(function(elevated){
  console.log(elevated ? 'elevated' : 'unelevated');
]);
```
