main();
/////////////// ignore above this line ////////////////////
function minMaxSum(data){
	const sortedData = data.sort();
	let result = [];
	const arrSum = data.reduce((pv, cv) => pv+cv, 0);
	result.push(arrSum-sortedData[sortedData.length-1]);
	result.push(arrSum-sortedData[0]);
	return result;
}

function main() {
    let arr = [1,2,3,4,5];
		arr = arr.map(Number);

		const result = minMaxSum(arr);
		console.log(result.join(' '));
}
