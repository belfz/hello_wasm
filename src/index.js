const wasm = require('./main.rs');

wasm.initialize({noExitRuntime: true}).then(module => {
  const add = module.cwrap('add', 'number', ['number', 'number']);
  console.log(add(40, 2));
});
