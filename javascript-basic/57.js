function copy(str, n){
    let new_str = '';
    if (n <= 0){
        return false;
    }
    else{
        for (let i = 1; i <= n; i++){
            new_str += str;
        }
    }

    return new_str;
}


