function max_difference(arr){
    var dif_arr = [];

    for (let i = 0; i < arr.length; i++){
        for (let j = i+1; j < arr.length; j++){
            var value = Math.abs( arr[i] - arr[j]);
            dif_arr.push(value);
        }
    }

    var dif_max = Math.max.apply(null, dif_arr);
    return dif_max;
}
