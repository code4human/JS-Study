//최대값 알고리즘 이용하기
//최대값 변수 a를 하나 만든다.
//a는 1로 초기화한다. 
//배열 속 원소가 최대값 변수 a보다 크면 a에 원소를 대입한다.
//변수 a로 배열값을 전부 맞춘다.
function judge_arr(arr){
    let a = 1;
    for(let i = 0; i < arr.length; i++){
        if(a < arr[i]){
            a = arr[i];
        }
    }

    for(let i = 0; i < arr.length; i++){
        arr[i] = a;
    }

    return arr;
}


