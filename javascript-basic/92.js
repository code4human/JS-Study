function consecutive_sum(arr){
    var sum_arr = [];

    for (let i = 0; i < arr.length-1; i++){
        sum_arr.push( arr[i] + arr[i+1]);
    }

    var sum_max = Math.max.apply(null, sum_arr);
    return sum_max;
}

//배열 내에서 최대값이나 최소값을 찾는 경우
//Math 객체에 max, min 메소드가 존재하는데 여기에 apply 메소드를 사용하면 
//숫자로 이루어진 배열을 파라미터로 전달할 수 있다.
//배열 내에 비교 불가능한 값이 있다면 결과는 NaN으로 출력됨
//Math.max.apply(null, 배열); 
//Math.min.apply(null, 배열);
