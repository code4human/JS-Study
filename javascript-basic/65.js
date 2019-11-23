function script(str){
    var new_str = ''
    if (str.substr(str.length, str.length-1) === 'Script'){
        return true;
    }
    else{
        return false
    }
}

function script(str){
    var new_str = ''
    return str.substr(str.length, str.length-1) === 'Script';
}



