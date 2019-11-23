function copy(str){
    let new_str = '';
    if (str.length <= 1){
        return false;
    }
    else{
        for (let i = 0; i < str.length/2 ; i++){
            new_str += str[i]
        }
    }

    return new_str;
}


