function consecutive_sum(arr){
    var dif_arr = [];

    for (let i = 0; i < arr.length-1; i++){
        var value = Math.abs(arr[i] - arr[i+1])
        dif_arr.push( value );
    }

    var dif_max = Math.max.apply(null, dif_arr);
    return dif_max;
}
