var exp = require('express');
var app = exp();

app.get('/', function(req, res){
	res.write("Hello Express");
	res.end();
});
//process.env.npm_package_config_port
//process.env.PORT
var port = process.env.npm_package_config_port || 3000;

app.listen(port, function () {
  console.log('server listening on port ' + port);
});
