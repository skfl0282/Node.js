/*
function a(){
  console.log('A');
}
*/

var a = function (){ //이름이 없는 함수, 익명함수
  console.log('A');
} //함수가 값이다.

function slowfunc(callback){
  callback();
}

slowfunc(a); //오랜시간이 걸리는 함수 실행됨. callback이라는 파라미터는 함수 a를 가지게 됨
