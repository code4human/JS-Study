function change(arr, num1, num2){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === num1){
            arr[i] = num2;
        }
    }
    return arr;
}
