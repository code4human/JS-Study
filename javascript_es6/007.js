// normal function vs. fat arrow function
// this에 값을 할당하는 방식이 다르다.
let button = document.querySelector('button');

// context of this is determined when button clicks. (addEventListener 이후 결정)
function fn1(){
    console.log(this);
}

// context of this is determined when computer reads code. (Window 상태. fat arrow function의 차이)
let fn2 = () => console.log(this)

button.addEventListener('click', fn1);   //<button id="button">Test</button>
button.addEventListener('click', fn2);   //Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}

//let fn2 = () => console.log(this) 문장이 여기 있으면 fn2가 없다는 오류 난다.