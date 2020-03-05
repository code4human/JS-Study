//object
//key에 quotation mark "" 사용하면 object에 접근 시 [] 사용

// #case6
let name = 'Batman';
let age = 30;
let obj = {
    "name": name ,   //value 생략불가
    age,
    greet(){
        console.log('hello');
    }
}
console.log(obj["name"]);  


// #case7
let name = 'Batman';
let age = 30;
let obj = {
    "name": name ,   
    age,
    "greet"(){
        console.log('hello');
    }
}
console.log(obj["greet"]);   //ƒ "greet"(){console.log('hello');}
console.log(obj["greet"]());   //hello