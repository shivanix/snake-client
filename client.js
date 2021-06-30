const net = require('net');
const { IP, PORT } = require("./constants");


// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", function(message) {
    console.log(`server has said: ${message}`);
  });

  conn.on("connect", function() {
    console.log(`Successfully connected to game server`);
  });
  conn.on('connect', () => {
    conn.write("Name: GGG");

  });

  return conn;

};

module.exports = {
  connect

};