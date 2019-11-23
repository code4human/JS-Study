function longest(arr){
    var long_len = 0;
    var long_str = '';
    for (let i = 0; i < arr.length; i++){
        if (long_len < arr[i].length){
            long_len = arr[i].length;
            long_str = arr[i];
        }
    }
    return [long_str];
}

