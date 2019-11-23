function last_three_to_start(str){
    copy1 = str;
    copy2 = str;
    var str_1 = copy1.substr(str.length-3, str.length-1);
    var str_2 = copy1.substr(0, str.length-4);

    return str_2 + str_1;
}

