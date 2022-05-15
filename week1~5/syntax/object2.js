var f = function (){ //이름이 없는 함수
  console.log(1+1);
  console.log(1+2);
}
console.log(f);
f();
var a = [f]; //배열에 f라고 하는 원소가 담겨있는데, f는 함수
a[0](); //a의 첫번째자리

var o = {
  func:f //func : 객체의 원소, property
}
o.func();
//var i = if(true){console.log(1)};

//var w = while(true){console.log(1)};
