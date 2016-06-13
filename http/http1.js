var http = require("http");
console.log("To call Create Server");
var server = http.createServer(function(req, res){
	console.log("Method=" + req.method);
	res.end("Hello NodeJS");
});
console.log("Create Server is over");
server.listen("3333", function(){
	console.log("My HTTP server is running on port 3333");
});