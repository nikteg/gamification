fs = require("fs");

var loadedDataArr = [];
var dataArr = [];

var wow = fs.readFileSync("./heightweight.csv",'utf8', (err, data) => {
	
	if(err){
		console.log("err");
		throw err;
	}
	loadedDataArr = data.split("\n")
})

console.log(wow);

loadedDataArr.forEach(function(entry, i){
	dataArr[i] = [entry[1],entry[2]];
});

console.log(loadedDataArr);
