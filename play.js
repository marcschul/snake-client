const { connect } = require('./client');
console.log('Connecting ...');
connect();

const handleUserInput = (key) => {
  // start ctrl + c code..
  if (key === '\u0003') {
    process.exit();
  }
};

// actively listening to keyboard input

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

setupInput();