const http = require ('http');
const server = http.createServer((request, response)=>{
	console.log(request.url);
	response.end("No system is secure");

});
server.listen(3000);

console.log("Escuchando en: pipipipi")

