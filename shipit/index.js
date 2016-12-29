var express = require('express');
var app = express();
app.get('/', function(request, response){
	response.end("<html><body>Test site</body></html>");
});
app.listen(8010);
console.log("Server Start");