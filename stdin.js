process.stdin.resume();
process.stdin.on('data', function(val){
	process.stdout.write('data:'+val);
});