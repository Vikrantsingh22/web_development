const http = require("https");

const options = {
	"method": "GET",
	"hostname": "weatherapi-com.p.rapidapi.com",
	"port": null,
	"path": "/current.json?q=53.1%2C-0.13",
	"headers": {
		"X-RapidAPI-Key": "f2c273499dmsh2ccf7f21ab372c1p1f92e4jsnf5b9480da2ab",
		"X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
		"useQueryString": true
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();