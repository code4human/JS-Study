function random_change(str){
    var random_num = Math.floor( Math.random()*10 );
    
    if (random_num%2 === 0){
        str = str.toUpperCase();
    }
    else{
        str = str.toLowerCase();
    }
    return str;
}
