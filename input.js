const handleUserInput = (input) => {
  if (input === "\u0003") {
    console.log("Exiting...");
    process.exit();
  } else if (input === "c") {
    console.log("up");
  } else if (input === "h") {
    console.log("left");
  } else if (input === "t") {
    console.log("down");
  } else if (input === "n") {
    console.log("right");
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

module.exports = { setupInput };
