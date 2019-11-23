var alpha = 'abcdefghijklmnopqrstuvwsyz';

function next_alpha(str){
    var new_str = ''
    for(let i = 0; i < str.length; i++){
        new_str += alpha[ alpha.indexOf(str[i]) + 1 ];
    }

    return new_str;
}

