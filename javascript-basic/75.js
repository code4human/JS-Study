function judge_arr(arr1, arr2){
    var arr1_mid = Math.floor(arr1.length/2);
    var arr2_mid = Math.floor(arr2.length/2);

    var arr3 = [ arr1[arr1_mid], arr2[arr2_mid]];
    return arr3;
}


