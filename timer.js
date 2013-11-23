
// 4 funciones timer

var sys=require('sys');
//ejemplo de timeout -espera 2 segundos antes de continuar el siguiente paso
var start_time = new Date();
sys.puts('inicia un timer de 2 segundos:'+start_time.getTime());//tiempo actual

setTimeout(function(){
	var end_time =new Date();
	sys.puts('end_time:'+end_time.getTime());
	var diff = end_time.getTime() - start_time.getTime();
	//console.log('diff'+Math.round(diff/1000));
	sys.puts('detener el timer despues de :'+Math.round(diff/1000) +' segundos');
	clear_timeout();

},2000);
//ejemplo de clear_timeout- configurado en 30 segundos, se cancela a traves de cleartimeout, sin salir
function clear_timeout(){
	var start_time=new Date();
	sys.puts('se inicializa timer de 30s y lo detine de inmediato sin disparar una llamada');
	var timeout= setTimeout(function(){
		var end_time = new Date();
		var diff= end_time.getTime() - start_time.getTime();
		sys.puts('tiempo detenido despues de' + Math.round(diff/1000)+' segundos');


	},30000);
	 
	clearTimeout(timeout);
	 
	interval_ejemplo();
}

//intervalo -5 salidas cada 2 segundos, detenido despues del 5 to tick
function interval_ejemplo(){
	var start_time=new Date();
	sys.puts(' se inicia un intervalo de 2s, detenido despues de 5to tick');
	var count =1;
	var intervalo= setInterval(function(){
		if(count == 5) 
			clearInterval(this);
			var end_time =new Date();
			var diff = end_time.getTime()-start_time.getTime();
			sys.puts('tick numero '+count+' despues de '+Math.round(diff/1000)+' segundos');
			count++;
	},2000);
}