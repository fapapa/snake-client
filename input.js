let connection;

const handleUserInput = (input) => {
  if (input === "\u0003") {
    console.log("Exiting...");
    process.exit();
  } else if (input === "c") {
    connection.write("Move: up");
  } else if (input === "h") {
    connection.write("Move: left");
  } else if (input === "t") {
    connection.write("Move: down");
  } else if (input === "n") {
    connection.write("Move: right");
  } else if (input === "m") {
    connection.write("Say: Nahaa!");
  } else if (input === "v") {
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
