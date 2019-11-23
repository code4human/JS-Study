//.indexOf()로 존재여부 확인한다
//존재하면 인덱스를 반환, 없으면 -1을 반환 

function judge_arr(arr){
    if(arr.indexOf(1) != -1 | arr.indexOf(3) != -1){
        return true;
    }
    else{
        return false;
    }
}


