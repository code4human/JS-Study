//임시 변수 k 활용
//k = arr[0]
//arr[0] = arr[arr.length-1]
//arr[arr.length-1] = k

function swap(arr){
    var k = arr[0];
    arr[0] = arr[arr.length-1]
    arr[arr.length-1] = k

    return arr
}


