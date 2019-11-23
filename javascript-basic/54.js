//const vowels = ['a','e','i','o','u'];
//배열안에 for문 이중으로 하면 됨

function check(string){
    let num = 0;
    for (let i=0; i<string.length; i++){
        if (string[i] === 'a' | string[i] === 'e'| string[i] === 'i' | string[i] === 'o'| string[i] === 'u'){
            num++;
        }
    }
    return num;
}


