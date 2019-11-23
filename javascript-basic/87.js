// 두 배열의 원소가 같을 때마다 개수를 하나씩 센다.
// 개수 변수 result가 배열의 길이와 같으면
// 배열의 원소 수만큼 같음이 확인된 것이다.

function same_two_arr(arr1, arr2){
    var result = 0;
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] === arr2[i]){
            result += 1;
        }
    }

    if (result != arr1.length) {
        return false;
    }
    return true;
}

