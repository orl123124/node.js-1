//2). cliente TCP ----
//SOCKET


var net = require('net');//modulo net para tcp
var cliente = new net.Socket();
cliente.setEncoding('utf8');

//conectar al servidor
cliente.connect('8124','localhost',function(){
	console.log('conectado al servidor');
	cliente.write('Ya podemos comunicarnos sin navegador');
});
//preparando para entrar desde el terminal

process.stdin.resume();
//cuando recibe datos lo envia al servidor

process.stdin.on('data', function(data){
	cliente.write(data);
});
//cuando recibe datos de vuelta los imprime en pantalla

cliente.on('data',function(data){
	console.log(data);
});
//cuando el servidor se cierra

cliente.on('close',function(){
	console.log('la conexion se cerro');
});