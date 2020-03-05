//var, let, const
//특별한 이유가 없는 한 var 보다는 let을 사용하자.

// #case1
// 언어상의 결함. 두 번째 선언한 변수 message는 블럭 안에 있지만 참조되버린다.
var message = 'hi';
{
    var message = 'bye';
}
console.log(message)  //bye

// #case2
// scope의 개념이 뒤죽박죽. 함수로 블럭을 지정하면 첫 번째 변수를 참조한다. 
var message = 'hi';
function greet(){
    var message = 'bye';
}
console.log(message)   //hi

// #case1_해결
// let 선언으로 문제 해결
var message = 'hi';
{
    var message = 'bye';
}
console.log(message)  //hi

// #case2_해결
// let 선언으로 문제 해결
var message = 'hi';
function greet(){
    var message = 'bye';
}
console.log(message)  //hi
