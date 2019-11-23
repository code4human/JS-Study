// 결과값 안 나옴 ㅠ

function check(string){
    for (let i=0; i<string.length; i++){
        if (string[i] === 'a'){
            var a_index = i;     // let으로 변수 선언하니까 for문 밖의 if문이 실행 안 됨
        }
        if (string[i] === 'b'){
            var b_index = i;
        }
    }
    if (b_index - a_index === 4){
        return 'a and b are separated by exactly 3 places';
    }
    else {
        return 'a and b don\'t exist';
    }
}

