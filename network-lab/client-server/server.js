const http = require("http");

const server = http.createServer((req, res) => {
	console.log("Request received!");
	console.log("Method:", req.method);
	console.log("URL:", req.url);

	res.end("Hello from the server!");
});

server.listen(3000, () => {
	console.log("Server is running on this port 3000");
});
