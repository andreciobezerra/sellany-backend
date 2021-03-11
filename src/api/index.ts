import Server from "./server";

const server = new Server(3666);

server.init();
server.listen();
