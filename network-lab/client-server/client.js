const http = require("http");

const request = http.get("http://localhost:3000", (res) => {
	let data = "chinedu";

	res.on("data", (chunk) => {
		data += chunk;
	});

	res.on("end", () => {
		console.log("Server response:", data);
	});
});
