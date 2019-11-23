// w3resource에 있는 정규표현식 코드를 그대로 따라 작성했다.

function equal_pt(str){
    var str_p = str.replace(/[^p]/g, "");
    var str_t = str.replace(/[^p]/g, "");

    var p_num = str_p.length;
    var s_num = str_t.length;

    return p_num === s_num;
}

// 결과는 true 혹은 false로 나옴


