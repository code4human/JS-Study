function rank(arr, num){
    var rank = [];

    for (let i = 0; i < arr.length; i++){
        rank.push(1);
    }
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            if ( arr[i] < arr[j] ){
                rank[i] += 1;
            }
        }
    }

    return arr[ rank.indexOf(num) ];
}

