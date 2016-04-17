
var nTimes = 10;
var nSamples = 10;

function getMean(n){
	var sum = 0;
	for(i = 0; i < n; i++){
		sum += Math.random()*10;
	}
	return new Promise(function(resolve, reject){
		return sum/n;
	});
}

function print(nT, nS){
	for(i = 0; i < nS; i++){
		getMean(nT).then(function(d){
			console.log(d);
		});
	}
}

print(nTimes,nSamples);