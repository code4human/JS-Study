//default argument(parameter)
//value allocated; undefined; not even undefined 세 가지의 경우로 나뉜다.


//default 없는 경우
function isEqualTo(number, compare){
    return number === compare;
};
console.log(isEqualTo(5, 6));   //False

//default 있는 경우
// #case1
function isEqualTo(number, compare=10){
    console.log(number);   //10
    console.log(compare);   //10
    return number === compare;   //True
};
console.log(isEqualTo(10));   //number에 10 투입

// #case2
function isEqualTo(number=10, compare=10){
    console.log(number);   //5
    console.log(compare);   //10
    return number === compare;   //False
};
console.log(isEqualTo(5));   

// #case3
let a = 20;
function isEqualTo(number=5, compare=a/2){
    console.log(number);   //10
    console.log(compare);   //10
    return number === compare;   //True
};
console.log(isEqualTo(10));   

// #case4
function isEqualTo(number=10, compare=number){
    console.log(number);   //10
    console.log(compare);   //10
    return number === compare;   //True
};
console.log(isEqualTo(10)); 

// #case5
function isEqualTo(number=compare, compare){
    console.log(number);   //10
    console.log(compare);   //undefined
    return number === compare;   //False
};
console.log(isEqualTo(10));   //number에 10 투입

// #case6
function isEqualTo(number, compare=number){
    console.log(number);   //undefined
    console.log(compare);   //undefined
    return number === compare;   //True
};
console.log(isEqualTo());   //number에 undefined 투입

// #case7 
function isEqualTo(number=compare, compare){
    console.log(number);   
    console.log(compare);  
    return number === compare;  
};
console.log(isEqualTo());  //Uncaught ReferenceError: Cannot access 'compare' before initialization. (undefined도 안 들어간 상황)