const {
  connect
} = require("./client")


const handleUserInput = function (key) {
  // your code here
  if (key === '\u0003') {
    process.exit();
  }
  key = key.toLowerCase();
  if (key === 'w') {
    console.log("Up");
  }
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => {
    handleUserInput(key)
  });

  return stdin;
};


console.log("Connecting ...");
connect();
setupInput();