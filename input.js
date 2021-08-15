const { builtinModules } = require("module");

let connection;

const handleUserInput = (key) => {
  // start ctrl + c code..
  if (key === '\u0003') {
    process.exit();
  }
  
  // movement
  // edge case => upperCase letters + lowerCase letters
  // w || W
  if (key === '\u0057' || key === '\u0077') {
    connection.write('Move: up');
  }
  // a || A
  if (key === '\u0041' || key === '\u0061') {
    connection.write('Move: left');
  }
  // s || S
  if (key === '\u0053' || key === '\u0073') {
    connection.write('Move: down');
  }
  // d || D
  if (key === '\u0044' || key === '\u0064') {
    connection.write('Move: right');
  }
  // 1 || !
  if (key === '\u0031' || key === '\u0021') {
    connection.write('Say: PewPew!');
  }
  // 2 || @
  if (key === '\u0032' || key === '\u0040') {
    connection.write('Say: Run!');
  }
  // 3 || #
  if (key === '\u0033' || key === '\u0023') {
    connection.write('Say: Go Away!');
  }

};

// actively listening to keyboard input
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

module.exports = {
  setupInput
}