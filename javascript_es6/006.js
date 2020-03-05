// fat arrow function
// 아래는 모두 같은 함수

function add(a, b){
    return a+b;
}

const add = function(a, b){
    return a+b;
}

const add = (a, b) => {return a+b;}

const add = (a, b) => a+b;  //괄호를 없앨시 return을 반드시 지워야 한다.

const add = a => a+5; //argument가 한개이면 괄호 없애도 된다.

console.log(add(1,2))



