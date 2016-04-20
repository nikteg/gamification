import gaussian from './gaussian/lib/gaussian.js';

var map = new Map();

var start = -2;
var end = 2;
var n = 100;

for(i = 0; i < n; i++){
	
	var key = Math.round(Math.random()*2);
	
	function generateValue(){
		if(map.get(key) < 1 || map.get(key) == undefined){
			return 1;
		}else{
			return map.get(key)+1;
		}
	}
	
	var value = generateValue();
	map.set(key, value);
}

console.log(map);

for (var key of map.keys()){
	console.log(key);
}