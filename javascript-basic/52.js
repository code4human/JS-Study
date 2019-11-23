var alpha_str = 'abcdefghijklmnopqrstuvwsyz';

function convert_str(given_str){
    new_str = '';
    for (let i = 0; i < given_str.length; i++){
        new_str += alpha_str.indexOf( given_str[i] )+' '
    }
    return new_str;
}

