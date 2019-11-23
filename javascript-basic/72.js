// 왜 자바스크립트는 arr[-1]을 지원하지 않는가.. -> slice()사용해야함
function judge_arr(arr){
    if (arr[0] === arr[arr.length-1]){
        return true;
    }
    else{
        return false;
    }
}


