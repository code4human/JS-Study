// 변수 선언
// 변수에는 숫자, 문자, 함수 등을 담는다.
var love = function(message, handler){
    handler(message);
};
// 변수에 object를 담아보기
// object는 key+value로 구성된다. 
// field or property라고 한다.
var trueLove = {
    name : 'TenaKim',
    age: 35,
    occupation: {
        title: 'Student',
        experience: 4,
    },
    handleMessage : function(message, handler){
    handler(message);
    }
};

//object를 참조하는 방법
trueLove.name      //"TenaKim"
trueLove["name"]   //"TenaKim"
trueLove.handleMessage   
//ƒ (message, handler){
//   handler(message);
//  }
trueLove.handleMessage(인자)  //함수 실행된다


//object 내에서 다른 object를 참조할 때
//this는 자기 자신으로, 전체 object(trueLove)를 가리킨다.
var trueLove = {
    name : 'TenaKim',
    age: 35,
    occupation: {
        title: 'Student',
        experience: 4,
    },
    handleMessage : function(message, handler){
    handler(message);
    },
    //함수가 두 번째 argument로 들어갔다. 
    receive: function(){
        this.handleMessage("hello, ", function(message){   
            console.log(message + this.name);
        })
    } 
};

trueLove.receive()  //hello, TenaKim


// => 화살표 함수로 교체해보기
var trueLove = {
    name : 'TenaKim',
    age: 35,
    occupation: {
        title: 'Student',
        experience: 4,
    },
    handleMessage : (message, handler) => handler(message),

    //함수가 두 번째 argument로 들어갔다. =>도 함수다. 
    receive: function(){
        this.handleMessage("hello, ", message => console.log(message + this.name)
        )
    } 
};