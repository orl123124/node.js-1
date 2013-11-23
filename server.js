

//SERVIDOR HTTP-------------------------
/*
var http=require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('curso de node.js\n');
}).listen(3000,'127.0.0.1');
console.log('server runnig at http://127.0.0.1:3000');

*/

//1). SERVIDOR TCP------------------------------
//PASA UNA INSTANCIA DE UN SOCKET
// Q ESCUCHA CONECCIONES DE ENTRADA

var net =require('net');
var server = net.createServer(function(conn){
	console.log('conectando..');

	conn.on('data', function(data){
		console.log(data +' desde '+ conn.remoteAddress+' - '+ conn.remotePort);
		conn.write('repitiendo enviado al server:' + data);// se envia hacia el server
		console.log('repitiendo local :' + data);
	});
	conn.on('close', function(){
		console.log('se cerro conexion');
	});

}).listen(8124);
console.log('escuchando en puerto http://127.0.0.1:8124');