arr = new Array();



for(i = 0; i < 100; i++){

	var key = 0; 
	key = +(Math.random()*10).toFixed();
	
	var keyFound = false;
	
	arr.forEach(function(entry){
		if(entry[0] == key){
			entry[1] += 1;
			keyFound = true;
		}
	})
	
	if(keyFound === false){
		arr[arr.length] = [key, 1];
	}
	
}

arr.sort(function(a,b){
	if(a[0] > b[0]){
		return 1;
	}
	if(a[0] < b[0]){
		return -1;
	}
	return 0;
});

console.log(arr);