const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
var l = parseInt(userInput[0]);
 var b = parseInt(userInput[1]);
 
 if(l>=b)
 {
 console.log(l*b).toFixed(2);
 }else if(l<=b)
 {
 console.log(l*b).toFixed(2);
 }
});
