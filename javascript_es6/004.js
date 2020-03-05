//var과 let

// #case1
// var의 범주(scope) 혼동
// 두 콘솔로그 문장 모두 동작
if(true){
    var age = 24;
    console.log('age: ', age);
}
console.log('age: ', age);
//age:  24
//age:  24


// #case2
// let은 자기 범주를 벗어나지 않는 변수다.
if(true){
    let age = 24;
    console.log('age: ', age);   //age:  24 
}
console.log('age: ', age);   //Uncaught ReferenceError


// #case3
// 본인 범주에 존재하는 age를 인식한다.
if(true){
    let age = 24;
    console.log('age: ', age);   
}
let age = 14;
console.log('age: ', age);   
//age:  24
//age:  14


// #case4
if(true){
    var age = 24;
    console.log('age: ', age);   
}
let age = 14;
console.log('age: ', age); 
//서로 충돌. Uncaught SyntaxError: Identifier 'age' has already been declared


// #case5
// if문과 다르게 function은 var의 범주를 지켜준다.
function doSomething(){
    var age = 24;
}
doSomething();
console.log(age);
//Uncaught ReferenceError: age is not defined

