const net = require('net');

// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)

const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', function() {
    console.log('Successfully connected to game server');
    conn.write('Name: MWS');
    // setInterval(() => conn.write('Move: up'), 50);
  });

  conn.on('data', function(data) {
    console.log(data);
  });

  return conn;
}

module.exports = {
  connect
}