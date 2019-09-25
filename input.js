const {
  IP,
  PORT,
  MOVE_UP_KEY,
  MOVE_LEFT_KEY,
  MOVE_RIGHT_KEY,
  MOVE_DOWN_KEY,
  SAY_NAHA_KEY,
  SAY_VROOOM_KEY
} = require('./constants.js');

let connection;

const handleUserInput = (input) => {
  if (input === "\u0003") {
    console.log("Exiting...");
    process.exit();
  } else if (input === MOVE_UP_KEY) {
    connection.write("Move: up");
  } else if (input === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  } else if (input === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  } else if (input === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  } else if (input === SAY_NAHA_KEY) {
    connection.write("Say: Nahaa!");
  } else if (input === SAY_VROOOM_KEY) {
    connection.write("Say: VROOOOM!");
  }
};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);
  stdin.resume();
  return stdin;
};

module.exports = { setupInput };
