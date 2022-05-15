var fs=require('fs');
/*
//readfilesync
console.log('A');
var result = fs.readFileSync('syntax/sample.txt','utf8'); //동기적
console.log(result);
console.log('C');
*/

console.log('A');
fs.readFile('syntax/sample.txt','utf8',function(err,result){
  console.log(result);
}); //이 코드가 실행되는 중에 C가 출력되고 나중에 이 코드가 출력됨
console.log('C');
