const net = require('net');

const connect = () => {
  const conn = net.createConnection({
    host: '192.168.88.254',
    port: 50541
  });

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log("Successfully connected to the game serevr");
    conn.write("Name: FAB");
    setInterval(() => {
      // conn.write("Move: up");
    }, 50);
  });

  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

const handleUserInput = (input) => {
  if (input === "\u0003") {
    console.log("Exiting...");
    process.exit();
  }
};

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);
  stdin.resume();
  return stdin;
};
setupInput();


module.exports = { connect };
