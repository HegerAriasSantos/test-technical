import http from "http";
import dotenv from "dotenv";
import Router from "./router";


dotenv.config({ path: ".env" });
const port = process.env.PORT || 4200;


const server = http.createServer((req, res) => {
	Router(req.url, req.method, res);
});

server.listen(port);
console.log("The server is listen on port: " + port)
