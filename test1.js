const http = require('http');

const server = http.createServer
    (function (request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.end("Hello World\nkaigo hackathon\n");
    });

server.listen(9000);

console.log("Server running at http://127.0.0.1:9000/");