
/////////////// ignore above this line ////////////////////
function birthdayCakeCandles(n, ar) {
  const sortedAr = ar.sort( (a,b) => a - b);
  let remCanCount = 1;
  for(let i = n-1; i > 0; i--){

    if(sortedAr[i] !== sortedAr[i-1])
        break;

    remCanCount++;

  }
  return remCanCount;
}

function main() {
    var n = parseInt(readLine());
    ar = readLine().split(' ');
    ar = ar.map(Number).sort();
    var result = birthdayCakeCandles(n, ar);
    process.stdout.write("" + result + "\n");
}
