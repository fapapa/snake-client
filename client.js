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
  });

  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect };
