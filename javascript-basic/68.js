function take(str, n){
    var str = str.slice(0, -n);
    str = str.slice(n, str.length);

    return str;
}


