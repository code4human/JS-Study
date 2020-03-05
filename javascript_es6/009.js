//object
//dot notation .으로 접근

// #case1
let name = 'Batman';
let age = 30;
let obj = {
    //fields, properties = key + value
    name: 'Superman',
    age: 25
}
console.log(obj);   //{name: "Superman", age: 25}


// #case2
let name = 'Batman';
let age = 30;
let obj = {
    name: name,  
    age: age
}
console.log(obj);   //{name: "Batman", age: 30}


// #case3 (case2와 동일. 아무것도 없으면 name=name)
let name = 'Batman';
let age = 30;
let obj = {
    name,  
    age
}
console.log(obj);   //{name: "Batman", age: 30}


// #case4
let name = 'Batman';
let age = 30;
let obj = {
    name,  
    age, 
    greet: function(){
        console.log('hello');
    }
}
console.log(obj.greet());   //hello


// #case5 (case4와 동일.)
let name = 'Batman';
let age = 30;
let obj = {
    name,  
    age, 
    greet(){
        console.log('hello');
    }
}
console.log(obj.greet());   //hello
