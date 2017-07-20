process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////
function numberToStairs(sCount){
  const result = [];
  for(let i = 1; i <= sCount; i++){
    let spaces = Array.apply(null, {length: sCount-i}).map(Function.call, ()=>' ').join('');
    let row = Array.apply(null, {length: i}).map(Function.call, ()=>'#').join('');
    result.push(spaces+row);
  }
  return result;
}

function main() {
    var n = parseInt(readLine());
    const result = numberToStairs(n);
    console.log(result.join("\n"));

}
