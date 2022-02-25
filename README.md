# elevated

Check if script is executed in an elevated mode :
 - Using SUDO on Linux.
 - From an administrator account on Windows.

No support for other platforms like MacOS with this version but I'm opened to pull requests.

## Installation
### NPM
```bash
npm install -s elevated
```
### Yarn
```bash
yarn add elevated
```

## Usage examples

### elevated.check()

```javascript
// ES6 style

console.log(await require('elevated').check() ? 'elevated' : 'unelevated');

// Callback style

require('elevated').check().then(function(elevated){
  console.log(elevated ? 'elevated' : 'unelevated');
});
```

### elevated.required()

This way an exception is thrown with a platform specific message if the runtime is not elevated.

```javascript
await require('elevated').required();
```
