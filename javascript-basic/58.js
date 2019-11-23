function copy(str){
    let new_str = '';
    if (str.length <= 2){
        return false;
    }
    else{
        for (let i = str.length-3; i < str.length; i++){
            new_str += str[i]
        }
    }

    return new_str.repeat(4);
}


