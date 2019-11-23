function script(str){
    var new_str = '';
    if (str.length /2 === 0){
        return false;
    }
    else{
        var mid = Math.floor(str.length/2);
        for (var i = mid-1; i <= mid+1; i++){
            new_str += str[i];
        }
    }
    
    return new_str;
}




/*
function middle_three(str){
    if (str/2 === 0){
        break
    }
    copy1 = str;
    copy2 = str;
    var str_1 = copy1.substr(str.length-3, str.length-1);
    var str_2 = copy1.substr(0, str.length-3);  //str.length-4로 하니깐 알파벳 하나 누락됨

    return str_1 + str_2;
}
*/

