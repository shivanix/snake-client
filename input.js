let connection;

const handleUserInput = function(key) {
  // your code here
  if (key === '\u0003') {
    process.exit();
  }
  key = key.toLowerCase();
  if (key === 'w') {
    connection.write("Move: up");
  } else if (key === 'a') {
    connection.write("Move: left");
  } else if (key === "s") {
    connection.write("Move: down");
  } else if (key === "d") {
    connection.write("Move: right");
  }
  if(key === "r"){
    let bubbleId = Math.floor(Math.random() * 5);
    const phrases = ["Say: Whatevvverr", "Say: I do what I want", "Say: Lombite", "Say: Foodie","Say: Gororoba" ]; 

      connection.write(phrases[bubbleId]);
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => {
    handleUserInput(key);
  });

  return stdin;
};

module.exports = {
  setupInput
};