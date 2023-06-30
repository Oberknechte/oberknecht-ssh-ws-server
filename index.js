const { oberknechtSSHWSServer } = require("oberknecht-ssh-ws");

const server = new oberknechtSSHWSServer({
  debug: 3,
  serverPassword: process.env.SERVERPASSWORD,
});

server.connectServer();
