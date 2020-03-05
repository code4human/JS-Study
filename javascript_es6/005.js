// const
// 변수에 담긴 값을 변경할 수 없는 변수 선언? No!
// value of number, string of const can't be changed.
// but, value of object, array, list can be changed.
// but, the address of memory block where array of object reside can't be changed.


// #case1
const age = 25;
age = 20; 
console.log('age: ', age);
//Uncaught TypeError: Assignment to constant variable.


// #case2 
// 배열의 값 바뀐다.
const arr = [15, 20, 25]; 
arr.push(34);
console.log(arr);
//[15, 24, 29, 34]


// #case3
// object의 값 바뀐다.
const obj = {
    key: 'TenaKim',
    occupation: 'student'
};
obj.key = 'Superman';
console.log(obj);
//{key: "Superman", occupation: "student"}

// #case4
// 변수의 memory block 주소값을 변경할 순 없다.
const obj = {
    key: 'TenaKim',
    occupation: 'student'
};
let obj2 = {};
obj = obj2;   //Uncaught TypeError: Assignment to constant variable.
console.log(obj);

/*
const obj가 가리키는 것은 특정한 memory block의 주소다.  
obj와 obj2는 메모리 저장공간의 서로 다른 주소를 가리킨다. 
obj = obj2; 는 obj의 memory block 주소를 바꾼다는 의미다. 
그 일을 방지하는 것이 const 선언이다.
만약 var obj로 선언했다면 memory block의 주소를 바꿀 수 있다.

이와 달리 아래의 경우는 새로운 element를 array에 집어 넣는다.
추가해도 arr이라는 변수가 가리키는 memory block의 주소는 변함이 없다. 
memory block 내의 데이터만 달라질 뿐이다.
const arr = [15, 20, 25]; 
arr.push(34);
*/