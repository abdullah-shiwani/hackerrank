
/////////////// ignore above this line ////////////////////

function birthdayCakeCandles(n, ar) {
  const sortedAr = ar.sort();
  let remCanCount = 1;
  for(let i = n-1; i >= 0; i--){
    if(sortedAr[i] === sortedAr[i-1])
      remCanCount++;
    else
      break;
  }
  return remCanCount;
}

function main() {
    var n = parseInt(readLine());
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = birthdayCakeCandles(n, ar);
    process.stdout.write("" + result + "\n");

}
