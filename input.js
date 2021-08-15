const { builtinModules } = require("module");

let connection;

const handleUserInput = (key) => {
  // start ctrl + c code..
  if (key === '\u0003') {
    process.exit();
  }
  
  // movement
  // edge case => upperCase letters + lowerCase letters
  if (key === '\u0057' || key === '\u0077') {
    connection.write('Move: up');
  }
  if (key === '\u0041' || key === '\u0061') {
    connection.write('Move: left');
  }
  if (key === '\u0053' || key === '\u0073') {
    connection.write('Move: down');
  }
  if (key === '\u0044' || key === '\u0064') {
    connection.write('Move: right');
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