function divide_add(arr){
    var num_even = 0;
    var num_odd = 0; 
    for(let i = 0; i < arr.length; i++){
        if(i%2 === 0){
            num_even += arr[i]; 
        }
        else{
            num_odd += arr[i];
        }
    }

    return [num_even, num_odd];
}

